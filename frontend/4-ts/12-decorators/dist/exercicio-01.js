"use strict";
// ==============================================================
// DECORATORS EM TYPESCRIPT
// ==============================================================
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
// O que são Decorators?
// Decorators são funções aplicadas a classes ou membros de classes para
// observar, modificar ou substituir seu comportamento de forma declarativa.
//
// Para que servem?
// Servem para adicionar comportamentos reutilizáveis, como logging,
// validação, registro e controle de comportamento.
//
// Como usar?
// Use o símbolo @ seguido do nome do decorator no elemento que será decorado.
// Exemplo: @logarExecucao
//
// Quando usar?
// Quando um comportamento técnico e reutilizável puder ser separado da
// lógica principal da classe ou do método.
//
// Quando não usar?
// Não use decorators apenas para deixar o código mais sofisticado.
// Evite-os quando uma função ou outra solução direta resolver o problema
// com menos complexidade.
//
// Este arquivo usa o modelo atual de decorators do TypeScript.
// O modelo atual é diferente do modelo legado baseado em
// --experimentalDecorators.
// ==============================================================
// ==============================================================
// EXEMPLO 1: Decorator de método para registrar a execução
// ==============================================================
// Este decorator é aplicado a métodos.
// Ele registra quando o método começa e quando termina.
// É útil para depuração e rastreamento de execução.
function logarExecucao(metodoOriginal, contexto) {
    const nomeDoMetodo = String(contexto.name);
    return function (...argumentos) {
        console.log(`Início do método "${nomeDoMetodo}".`);
        const resultado = metodoOriginal.call(this, ...argumentos);
        console.log(`Fim do método "${nomeDoMetodo}".`);
        return resultado;
    };
}
let Exemplo1 = (() => {
    let _instanceExtraInitializers = [];
    let _saudacao_decorators;
    return class Exemplo1 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _saudacao_decorators = [logarExecucao];
            __esDecorate(this, null, _saudacao_decorators, { kind: "method", name: "saudacao", static: false, private: false, access: { has: obj => "saudacao" in obj, get: obj => obj.saudacao }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        saudacao(nomeDoUsuario) {
            return `Olá, ${nomeDoUsuario}!`;
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const exemplo1 = new Exemplo1();
console.log(exemplo1.saudacao("Walter"));
// ==============================================================
// EXEMPLO 2: Decorator de auto-accessor para validar valores
// ==============================================================
// Um field decorator atual recebe o valor inicial do campo e pode retornar
// uma função de inicialização. Ele não intercepta automaticamente toda
// leitura ou escrita futura da propriedade.
//
// Como este exemplo precisa validar cada atribuição, usamos um
// auto-accessor, que permite personalizar get e set.
function validarNomeNaoVazio(accessorOriginal, contexto) {
    const nomeDaPropriedade = String(contexto.name);
    return {
        get() {
            return accessorOriginal.get.call(this);
        },
        set(novoValor) {
            if (novoValor.trim() === "") {
                throw new Error(`A propriedade "${nomeDaPropriedade}" não pode ser vazia.`);
            }
            accessorOriginal.set.call(this, novoValor);
        },
    };
}
let Exemplo2 = (() => {
    let _nomeDoUsuario_decorators;
    let _nomeDoUsuario_initializers = [];
    let _nomeDoUsuario_extraInitializers = [];
    return class Exemplo2 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nomeDoUsuario_decorators = [validarNomeNaoVazio];
            __esDecorate(this, null, _nomeDoUsuario_decorators, { kind: "accessor", name: "nomeDoUsuario", static: false, private: false, access: { has: obj => "nomeDoUsuario" in obj, get: obj => obj.nomeDoUsuario, set: (obj, value) => { obj.nomeDoUsuario = value; } }, metadata: _metadata }, _nomeDoUsuario_initializers, _nomeDoUsuario_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #nomeDoUsuario_accessor_storage = __runInitializers(this, _nomeDoUsuario_initializers, "Walter");
        get nomeDoUsuario() { return this.#nomeDoUsuario_accessor_storage; }
        set nomeDoUsuario(value) { this.#nomeDoUsuario_accessor_storage = value; }
        constructor() {
            __runInitializers(this, _nomeDoUsuario_extraInitializers);
        }
    };
})();
const exemplo2 = new Exemplo2();
console.log(exemplo2.nomeDoUsuario);
try {
    exemplo2.nomeDoUsuario = "";
}
catch (erro) {
    if (erro instanceof Error) {
        console.error(erro.message);
    }
}
// ==============================================================
// EXEMPLO 3: Decorator de classe para congelar o protótipo
// ==============================================================
// Este é um decorator de classe.
// Ele congela o protótipo da classe, impedindo alterações estruturais
// ou substituições nas propriedades existentes do protótipo.
//
// Isso não congela as instâncias criadas pela classe.
function congelarPrototipo(classeOriginal, _contexto) {
    Object.freeze(classeOriginal.prototype);
}
let Exemplo3 = (() => {
    let _classDecorators = [congelarPrototipo];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Exemplo3 = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Exemplo3 = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        apresentarMensagem() {
            return "Classe com protótipo congelado.";
        }
    };
    return Exemplo3 = _classThis;
})();
const exemplo3 = new Exemplo3();
console.log(Object.isFrozen(Exemplo3.prototype));
console.log(exemplo3.apresentarMensagem());
try {
    Object.defineProperty(Exemplo3.prototype, "novoMetodo", {
        value: function () {
            return "Novo método";
        },
    });
}
catch (erro) {
    if (erro instanceof TypeError) {
        console.error("O protótipo está congelado e não pode ser alterado.");
    }
}
// ==============================================================
// EXEMPLO 4: Decorator de método com memoização
// ==============================================================
// Este decorator armazena o resultado de cada número calculado.
// Ele é útil quando o mesmo cálculo custa caro e pode ser reutilizado.
//
// O cache é separado por instância para evitar que uma instância reutilize
// resultados armazenados por outra instância.
function memoizarCalculo(metodoOriginal, _contexto) {
    const cachePorInstancia = new WeakMap();
    return function (numero) {
        let cacheDaInstancia = cachePorInstancia.get(this);
        if (!cacheDaInstancia) {
            cacheDaInstancia = new Map();
            cachePorInstancia.set(this, cacheDaInstancia);
        }
        if (cacheDaInstancia.has(numero)) {
            console.log(`Resultado ${numero} encontrado no cache.`);
            return cacheDaInstancia.get(numero);
        }
        const resultado = metodoOriginal.call(this, numero);
        cacheDaInstancia.set(numero, resultado);
        return resultado;
    };
}
let Exemplo4 = (() => {
    let _instanceExtraInitializers = [];
    let _calcularFibonacci_decorators;
    return class Exemplo4 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _calcularFibonacci_decorators = [memoizarCalculo];
            __esDecorate(this, null, _calcularFibonacci_decorators, { kind: "method", name: "calcularFibonacci", static: false, private: false, access: { has: obj => "calcularFibonacci" in obj, get: obj => obj.calcularFibonacci }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        calcularFibonacci(numero) {
            if (numero <= 1) {
                return numero;
            }
            return (this.calcularFibonacci(numero - 1) +
                this.calcularFibonacci(numero - 2));
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const exemplo4 = new Exemplo4();
console.log(exemplo4.calcularFibonacci(10));
console.log(exemplo4.calcularFibonacci(10));
