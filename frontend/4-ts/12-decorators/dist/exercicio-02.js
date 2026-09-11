"use strict";
// ==============================================================
// EXERCICIO 02 - DECORATORS DE MÉTODOS
// ==============================================================
// O que são Decorators de Métodos?
// São funções aplicadas a métodos de classe para modificar ou
// estender seu comportamento usando a sintaxe @nomeDoDecorator.
//
// Para que servem?
// Para adicionar funcionalidades transversais (logging, validação,
// cache, medição de tempo) sem poluir a lógica de negócio.
//
// Como usar?
// Aplicar o decorator antes da definição do método:
// @meuDecorator
// metodo() { ... }
//
// Quando usar?
// Quando um comportamento pode ser reutilizado em vários métodos.
//
// Quando não usar?
// Quando a lógica é específica de um único método ou é simples
// demais para justificar a abstração.
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
// EXEMPLO 1: Decorator que loga a execução de um método
// ==============================================================
// Demonstra o uso básico de ClassMethodDecoratorContext
// e a substituição do método original por uma versão que loga.
function logarExecucaoDoMetodo(metodoOriginal, contexto) {
    // Retorna uma nova função que substitui o método original
    function metodoSubstituto(...args) {
        console.log(`Método "${String(contexto.name)}" iniciado.`);
        const resultado = metodoOriginal.apply(this, args);
        console.log(`Método "${String(contexto.name)}" concluído.`);
        return resultado;
    }
    return metodoSubstituto;
}
let ServicoDeSaudacao = (() => {
    let _instanceExtraInitializers = [];
    let _saudar_decorators;
    return class ServicoDeSaudacao {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _saudar_decorators = [logarExecucaoDoMetodo];
            __esDecorate(this, null, _saudar_decorators, { kind: "method", name: "saudar", static: false, private: false, access: { has: obj => "saudar" in obj, get: obj => obj.saudar }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        saudar(nome) {
            return `Olá, ${nome}!`;
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const servico = new ServicoDeSaudacao();
console.log(servico.saudar("Walter"));
// ==============================================================
// EXEMPLO 2: Decorator que mede tempo de execução
// ==============================================================
// Demonstra medição de performance com preservação de this
// e tipagem correta dos argumentos.
function medirTempoDeExecucao(metodoOriginal, contexto) {
    function metodoSubstituto(...args) {
        const inicio = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = performance.now();
        console.log(`"${String(contexto.name)}" levou ${(fim - inicio).toFixed(2)}ms`);
        return resultado;
    }
    return metodoSubstituto;
}
let ServicoDeCalculo = (() => {
    let _instanceExtraInitializers = [];
    let _somarNumeros_decorators;
    return class ServicoDeCalculo {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _somarNumeros_decorators = [medirTempoDeExecucao];
            __esDecorate(this, null, _somarNumeros_decorators, { kind: "method", name: "somarNumeros", static: false, private: false, access: { has: obj => "somarNumeros" in obj, get: obj => obj.somarNumeros }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        somarNumeros(numeros) {
            return numeros.reduce((total, numero) => total + numero, 0);
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const calculo = new ServicoDeCalculo();
console.log(calculo.somarNumeros([1, 2, 3, 4, 5]));
// ==============================================================
// EXEMPLO 3: Decorator que modifica o valor retornado
// ==============================================================
// Demonstra como um decorator pode transformar o resultado
// do método original antes de devolvê-lo ao chamador.
function converterResultadoParaMaiusculas(metodoOriginal, contexto) {
    function metodoSubstituto(...args) {
        const resultadoOriginal = metodoOriginal.apply(this, args);
        return resultadoOriginal.toUpperCase();
    }
    return metodoSubstituto;
}
let GeradorDeMensagens = (() => {
    let _instanceExtraInitializers = [];
    let _gerarMensagem_decorators;
    return class GeradorDeMensagens {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _gerarMensagem_decorators = [converterResultadoParaMaiusculas];
            __esDecorate(this, null, _gerarMensagem_decorators, { kind: "method", name: "gerarMensagem", static: false, private: false, access: { has: obj => "gerarMensagem" in obj, get: obj => obj.gerarMensagem }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        gerarMensagem(texto) {
            return `mensagem: ${texto}`;
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const gerador = new GeradorDeMensagens();
console.log(gerador.gerarMensagem("importante"));
// ==============================================================
// EXEMPLO 4: Decorator que valida argumentos antes da execução
// ==============================================================
// Demonstra interceptação de argumentos para validação
// antes de chamar o método original.
function validarArgumentosNumericos(metodoOriginal, contexto) {
    function metodoSubstituto(...args) {
        for (let indice = 0; indice < args.length; indice++) {
            if (typeof args[indice] !== "number" || !isFinite(args[indice])) {
                throw new Error(`Argumento ${indice + 1} de "${String(contexto.name)}" deve ser um número válido.`);
            }
        }
        return metodoOriginal.apply(this, args);
    }
    return metodoSubstituto;
}
let CalculadoraFinanceira = (() => {
    let _instanceExtraInitializers = [];
    let _calcularJurosCompostos_decorators;
    return class CalculadoraFinanceira {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _calcularJurosCompostos_decorators = [validarArgumentosNumericos];
            __esDecorate(this, null, _calcularJurosCompostos_decorators, { kind: "method", name: "calcularJurosCompostos", static: false, private: false, access: { has: obj => "calcularJurosCompostos" in obj, get: obj => obj.calcularJurosCompostos }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        calcularJurosCompostos(capital, taxa, periodo) {
            return capital * Math.pow(1 + taxa, periodo);
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const calculadora = new CalculadoraFinanceira();
console.log(calculadora.calcularJurosCompostos(1000, 0.05, 12));
try {
    calculadora.calcularJurosCompostos(1000, NaN, 12);
}
catch (erro) {
    console.error(erro.message);
}
