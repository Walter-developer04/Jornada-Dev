"use strict";
// ==============================================================
// EXERCICIO 04 - DECORATOR FACTORY E COMPOSIÇÃO
// ==============================================================
// O que é um Decorator Factory?
// É uma função que RETORNA um decorator, permitindo configurar
// o comportamento do decorator antes de aplicá-lo.
//
// Diferença fundamental:
// - Decorator: @meuDecorator (função aplicada diretamente)
// - Factory: @criarDecorator(config) (função que PRODUZ o decorator)
//
// Para que servem?
// Para criar decorators configuráveis e reutilizáveis.
//
// Como usar?
// Chamar a factory com parâmetros: @factory(arg1, arg2)
//
// Quando usar?
// Quando precisa do mesmo comportamento com configurações diferentes.
//
// Quando não usar?
// Quando não há necessidade de configuração.
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// ==============================================================
// EXEMPLO 1: Decorator vs Decorator Factory
// ==============================================================
// Demonstra a diferença entre decorator direto e factory.
// Decorator direto (sem factory)
function logarSimples(metodoOriginal, contexto) {
    return function (...args) {
        console.log(`[${String(contexto.name)}] executando...`);
        return metodoOriginal.apply(this, args);
    };
}
// Decorator factory (retorna um decorator)
function criarLogger(prefixo) {
    // Esta função é a factory. Ela RETORNA o decorator.
    return function (metodoOriginal, contexto) {
        return function (...args) {
            console.log(`${prefixo} [${String(contexto.name)}] executando...`);
            return metodoOriginal.apply(this, args);
        };
    };
}
let ExemploComparacao = (() => {
    let _instanceExtraInitializers = [];
    let _metodoComDecoratorDireto_decorators;
    let _metodoComFactory_decorators;
    return class ExemploComparacao {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _metodoComDecoratorDireto_decorators = [logarSimples];
            _metodoComFactory_decorators = [criarLogger("[DEBUG]")];
            __esDecorate(this, null, _metodoComDecoratorDireto_decorators, { kind: "method", name: "metodoComDecoratorDireto", static: false, private: false, access: { has: obj => "metodoComDecoratorDireto" in obj, get: obj => obj.metodoComDecoratorDireto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _metodoComFactory_decorators, { kind: "method", name: "metodoComFactory", static: false, private: false, access: { has: obj => "metodoComFactory" in obj, get: obj => obj.metodoComFactory }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        metodoComDecoratorDireto() {
            return "decorator direto";
        }
        metodoComFactory() {
            return "factory configurável";
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const exemplo = new ExemploComparacao();
console.log(exemplo.metodoComDecoratorDireto());
console.log(exemplo.metodoComFactory());
function criarLoggerAvancado(config) {
    return function (metodoOriginal, contexto) {
        return function (...args) {
            const inicio = performance.now();
            console.log(`${config.prefixo} ${String(contexto.name)} iniciado.`);
            if (config.mostrarArgumentos) {
                console.log(`  Argumentos: ${JSON.stringify(args)}`);
            }
            const resultado = metodoOriginal.apply(this, args);
            if (config.mostrarTempo) {
                const tempo = performance.now() - inicio;
                console.log(`  Tempo: ${tempo.toFixed(2)}ms`);
            }
            console.log(`${config.prefixo} ${String(contexto.name)} concluído.`);
            return resultado;
        };
    };
}
let ServicoDePedidos = (() => {
    let _instanceExtraInitializers = [];
    let _processarPedido_decorators;
    let _consultarStatus_decorators;
    return class ServicoDePedidos {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _processarPedido_decorators = [criarLoggerAvancado({ prefixo: "[PEDIDO]", mostrarArgumentos: true, mostrarTempo: true })];
            _consultarStatus_decorators = [criarLoggerAvancado({ prefixo: "[CONSULTA]", mostrarArgumentos: false, mostrarTempo: false })];
            __esDecorate(this, null, _processarPedido_decorators, { kind: "method", name: "processarPedido", static: false, private: false, access: { has: obj => "processarPedido" in obj, get: obj => obj.processarPedido }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _consultarStatus_decorators, { kind: "method", name: "consultarStatus", static: false, private: false, access: { has: obj => "consultarStatus" in obj, get: obj => obj.consultarStatus }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        processarPedido(idDoPedido, valor) {
            return `Pedido ${idDoPedido} de R$ ${valor} processado`;
        }
        consultarStatus(idDoPedido) {
            return `Status do ${idDoPedido}: confirmado`;
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const pedidos = new ServicoDePedidos();
console.log(pedidos.processarPedido("PED-001", 150.00));
console.log(pedidos.consultarStatus("PED-001"));
// ==============================================================
// EXEMPLO 3: Composição de múltiplos decorators
// ==============================================================
// Demonstra ordem de aplicação:
// - Decorators são aplicados de BAIXO para CIMA (bottom-up)
// - O decorator mais próximo do método é aplicado primeiro
// - Na execução, o mais externo (mais distante) executa primeiro
function primeiroDecorator(metodoOriginal, contexto) {
    return function (...args) {
        console.log("→ Primeiro decorator (mais externo)");
        return metodoOriginal.apply(this, args);
    };
}
function segundoDecorator(metodoOriginal, contexto) {
    return function (...args) {
        console.log("→ Segundo decorator (mais interno)");
        return metodoOriginal.apply(this, args);
    };
}
let ExemploDeComposicao = (() => {
    let _instanceExtraInitializers = [];
    let _metodoComposto_decorators;
    return class ExemploDeComposicao {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _metodoComposto_decorators = [primeiroDecorator, segundoDecorator];
            __esDecorate(this, null, _metodoComposto_decorators, { kind: "method", name: "metodoComposto", static: false, private: false, access: { has: obj => "metodoComposto" in obj, get: obj => obj.metodoComposto }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        metodoComposto() {
            console.log("→ Método original executado");
            return "resultado";
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const composicao = new ExemploDeComposicao();
console.log(composicao.metodoComposto());
// ==============================================================
// EXEMPLO 4: Combinando decorators com propósitos diferentes
// ==============================================================
// Demonstra combinação de logging + validação + cache
// usando factory para cada propósito.
function criarValidador(fn, mensagemErro) {
    return function (metodoOriginal, contexto) {
        return function (valor) {
            if (!fn(valor)) {
                throw new Error(`${String(contexto.name)}: ${mensagemErro}`);
            }
            return metodoOriginal.call(this, valor);
        };
    };
}
function criarCacheSimples() {
    const cache = new Map();
    return function (metodoOriginal, contexto) {
        return function (...args) {
            const chave = `${String(contexto.name)}:${JSON.stringify(args)}`;
            if (cache.has(chave)) {
                console.log(`Cache hit: ${chave}`);
                return cache.get(chave);
            }
            const resultado = metodoOriginal.apply(this, args);
            cache.set(chave, resultado);
            return resultado;
        };
    };
}
const validarPositivo = criarValidador((valor) => valor > 0, "Valor deve ser positivo");
const cacheDeResultados = criarCacheSimples();
let ServicoDeCalculosComplexos = (() => {
    let _instanceExtraInitializers = [];
    let _calcularQuadrado_decorators;
    return class ServicoDeCalculosComplexos {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _calcularQuadrado_decorators = [cacheDeResultados, validarPositivo];
            __esDecorate(this, null, _calcularQuadrado_decorators, { kind: "method", name: "calcularQuadrado", static: false, private: false, access: { has: obj => "calcularQuadrado" in obj, get: obj => obj.calcularQuadrado }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        calcularQuadrado(numero) {
            console.log(`Calculando quadrado de ${numero}...`);
            return numero * numero;
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const servico = new ServicoDeCalculosComplexos();
console.log(servico.calcularQuadrado(5));
console.log(servico.calcularQuadrado(5));
try {
    servico.calcularQuadrado(-3);
}
catch (erro) {
    console.error(erro.message);
}
