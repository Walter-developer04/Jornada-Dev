"use strict";
// ==============================================================
// EXERCICIO 03 - DECORATORS DE FIELDS E AUTO-ACCESSORS
// ==============================================================
// O que são Decorators de Fields e Auto-Accessors?
// Field decorators são aplicados a propriedades de classe.
// Auto-accessors (accessor) permitem controlar get e set.
//
// Para que servem?
// Para inicializar, transformar ou validar valores de propriedades
// de forma declarativa e reutilizável.
//
// Como usar?
// Field: @decorator nomeDaPropriedade = valor;
// Auto-accessor: @decorator accessor nomeDaPropriedade = valor;
//
// Quando usar?
// Quando precisa validar ou transformar valores de propriedades.
//
// Quando não usar?
// Quando a validação é complexa demais para um decorator simples.
//
// IMPORTANTE:
// Field decorators NÃO interceptam automaticamente leituras e
// escritas futuras. Eles executam na definição da classe.
// Para interceptar get/set, use auto-accessors.
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
// ==============================================================
// EXEMPLO 1: Field decorator que executa na inicialização
// ==============================================================
// Demonstra que o field decorator recebe undefined como primeiro
// argumento e pode retornar uma função inicializadora.
// NÃO intercepta acessos futuros à propriedade.
function logarInicializacaoDoCampo(valorInicial, contexto) {
    console.log(`Campo "${String(contexto.name)}" sendo decorado.`);
    // Retorna uma função que será chamada com o valor inicial
    return function (valorDaPropriedade) {
        console.log(`Campo "${String(contexto.name)}" inicializado com:`, valorDaPropriedade);
        return valorDaPropriedade;
    };
}
let ConfiguracaoDoSistema = (() => {
    let _nomeDaAplicacao_decorators;
    let _nomeDaAplicacao_initializers = [];
    let _nomeDaAplicacao_extraInitializers = [];
    return class ConfiguracaoDoSistema {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nomeDaAplicacao_decorators = [logarInicializacaoDoCampo];
            __esDecorate(null, null, _nomeDaAplicacao_decorators, { kind: "field", name: "nomeDaAplicacao", static: false, private: false, access: { has: obj => "nomeDaAplicacao" in obj, get: obj => obj.nomeDaAplicacao, set: (obj, value) => { obj.nomeDaAplicacao = value; } }, metadata: _metadata }, _nomeDaAplicacao_initializers, _nomeDaAplicacao_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        nomeDaAplicacao = __runInitializers(this, _nomeDaAplicacao_initializers, "Sistema Web");
        constructor() {
            __runInitializers(this, _nomeDaAplicacao_extraInitializers);
        }
    };
})();
const config = new ConfiguracaoDoSistema();
console.log(config.nomeDaAplicacao);
// ==============================================================
// EXEMPLO 2: Field decorator que transforma o valor inicial
// ==============================================================
// Demonstra como um field decorator pode modificar o valor
// inicial de uma propriedade.
function padronizarTextoDoCampo(valorInicial, contexto) {
    return function (valorDaPropriedade) {
        if (typeof valorDaPropriedade === "string") {
            return valorDaPropriedade.trim().toLowerCase();
        }
        return valorDaPropriedade;
    };
}
let DadosDoUsuario = (() => {
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _nomeCompleto_decorators;
    let _nomeCompleto_initializers = [];
    let _nomeCompleto_extraInitializers = [];
    return class DadosDoUsuario {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _email_decorators = [padronizarTextoDoCampo];
            _nomeCompleto_decorators = [padronizarTextoDoCampo];
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _nomeCompleto_decorators, { kind: "field", name: "nomeCompleto", static: false, private: false, access: { has: obj => "nomeCompleto" in obj, get: obj => obj.nomeCompleto, set: (obj, value) => { obj.nomeCompleto = value; } }, metadata: _metadata }, _nomeCompleto_initializers, _nomeCompleto_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        email = __runInitializers(this, _email_initializers, "  WALTER@EXAMPLE.COM  ");
        nomeCompleto = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _nomeCompleto_initializers, "  Walter Silva  "));
        constructor() {
            __runInitializers(this, _nomeCompleto_extraInitializers);
        }
    };
})();
const dados = new DadosDoUsuario();
console.log(dados.email);
console.log(dados.nomeCompleto);
// ==============================================================
// EXEMPLO 3: Auto-accessor que controla get e set
// ==============================================================
// Demonstra o uso de "accessor" keyword para criar um accessor
// que permite interceptar leituras e escritas da propriedade.
// Diferente de field decorators, este SIM intercepta acessos.
function logarAcessoDaPropriedade(accessorOriginal, contexto) {
    return {
        get() {
            console.log(`Lendo "${String(contexto.name)}"`);
            return accessorOriginal.get.call(this);
        },
        set(valor) {
            console.log(`Escrevendo "${String(contexto.name)}":`, valor);
            accessorOriginal.set.call(this, valor);
        }
    };
}
let ContadorDeAcessos = (() => {
    let _valorAtual_decorators;
    let _valorAtual_initializers = [];
    let _valorAtual_extraInitializers = [];
    return class ContadorDeAcessos {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _valorAtual_decorators = [logarAcessoDaPropriedade];
            __esDecorate(this, null, _valorAtual_decorators, { kind: "accessor", name: "valorAtual", static: false, private: false, access: { has: obj => "valorAtual" in obj, get: obj => obj.valorAtual, set: (obj, value) => { obj.valorAtual = value; } }, metadata: _metadata }, _valorAtual_initializers, _valorAtual_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #valorAtual_accessor_storage = __runInitializers(this, _valorAtual_initializers, 0);
        get valorAtual() { return this.#valorAtual_accessor_storage; }
        set valorAtual(value) { this.#valorAtual_accessor_storage = value; }
        constructor() {
            __runInitializers(this, _valorAtual_extraInitializers);
        }
    };
})();
const contador = new ContadorDeAcessos();
contador.valorAtual = 10;
const valor = contador.valorAtual;
console.log("Valor final:", valor);
// ==============================================================
// EXEMPLO 4: Auto-accessor com validação
// ==============================================================
// Demonstra validação em tempo de escrita usando auto-accessor.
// O setter é interceptado e pode rejeitar valores inválidos.
function validarValorPositivo(accessorOriginal, contexto) {
    return {
        get() {
            return accessorOriginal.get.call(this);
        },
        set(valor) {
            if (valor < 0) {
                throw new Error(`"${String(contexto.name)}" não pode ser negativo. Recebido: ${valor}`);
            }
            accessorOriginal.set.call(this, valor);
        }
    };
}
let Produto = (() => {
    let _preco_decorators;
    let _preco_initializers = [];
    let _preco_extraInitializers = [];
    let _quantidadeEmEstoque_decorators;
    let _quantidadeEmEstoque_initializers = [];
    let _quantidadeEmEstoque_extraInitializers = [];
    return class Produto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _preco_decorators = [validarValorPositivo];
            _quantidadeEmEstoque_decorators = [validarValorPositivo];
            __esDecorate(this, null, _preco_decorators, { kind: "accessor", name: "preco", static: false, private: false, access: { has: obj => "preco" in obj, get: obj => obj.preco, set: (obj, value) => { obj.preco = value; } }, metadata: _metadata }, _preco_initializers, _preco_extraInitializers);
            __esDecorate(this, null, _quantidadeEmEstoque_decorators, { kind: "accessor", name: "quantidadeEmEstoque", static: false, private: false, access: { has: obj => "quantidadeEmEstoque" in obj, get: obj => obj.quantidadeEmEstoque, set: (obj, value) => { obj.quantidadeEmEstoque = value; } }, metadata: _metadata }, _quantidadeEmEstoque_initializers, _quantidadeEmEstoque_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #preco_accessor_storage = __runInitializers(this, _preco_initializers, 0);
        get preco() { return this.#preco_accessor_storage; }
        set preco(value) { this.#preco_accessor_storage = value; }
        #quantidadeEmEstoque_accessor_storage = (__runInitializers(this, _preco_extraInitializers), __runInitializers(this, _quantidadeEmEstoque_initializers, 0));
        get quantidadeEmEstoque() { return this.#quantidadeEmEstoque_accessor_storage; }
        set quantidadeEmEstoque(value) { this.#quantidadeEmEstoque_accessor_storage = value; }
        constructor() {
            __runInitializers(this, _quantidadeEmEstoque_extraInitializers);
        }
    };
})();
const produto = new Produto();
produto.preco = 99.90;
produto.quantidadeEmEstoque = 10;
console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
try {
    produto.preco = -50;
}
catch (erro) {
    console.error(erro.message);
}
