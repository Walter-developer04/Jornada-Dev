"use strict";
// ==============================================================
// EXERCICIO 05 - APLICAÇÃO PRÁTICA INTEGRADA
// ==============================================================
// Este arquivo combina conceitos dos exercícios anteriores:
// - Decorators de método
// - Auto-accessors
// - Decorator factory
// - Composição
// - addInitializer
// - Tipagem genérica
//
// O que são Decorators na prática integrada?
// São decorators combinados para criar funcionalidades completas
// como logging, validação, cache e controle de acesso.
//
// Para que servem?
// Para demonstrar como decorators podem trabalhar juntos
// em um cenário mais próximo de uma aplicação real.
//
// Como usar?
// Aplicar múltiplos decorators configurados conforme necessário.
//
// Quando usar?
// Em aplicações onde funcionalidades transversais são necessárias.
//
// Quando não usar?
// Quando a simplicidade é mais importante que a flexibilidade.
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
function criarLoggerCompleto(config) {
    return function (metodoOriginal, contexto) {
        const nomeDoMetodo = String(contexto.name);
        function metodoSubstituto(...args) {
            const partesDoLog = [];
            if (config.incluirTimestamp) {
                partesDoLog.push(new Date().toISOString());
            }
            partesDoLog.push(config.nivel.toUpperCase());
            partesDoLog.push(nomeDoMetodo);
            if (config.incluirNomeDaClasse && this && typeof this === "object") {
                const nomeDaClasse = this.constructor.name;
                partesDoLog.push(`(${nomeDaClasse})`);
            }
            console.log(partesDoLog.join(" | "));
            console.log(`  Argumentos: ${JSON.stringify(args)}`);
            const inicio = performance.now();
            try {
                const resultado = metodoOriginal.apply(this, args);
                const tempo = performance.now() - inicio;
                console.log(`  Resultado: ${JSON.stringify(resultado)}`);
                console.log(`  Duração: ${tempo.toFixed(2)}ms`);
                return resultado;
            }
            catch (erro) {
                console.error(`  Erro: ${erro instanceof Error ? erro.message : erro}`);
                throw erro;
            }
        }
        return metodoSubstituto;
    };
}
let RepositorioDeUsuarios = (() => {
    let _instanceExtraInitializers = [];
    let _buscarPorId_decorators;
    let _listarTodos_decorators;
    return class RepositorioDeUsuarios {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _buscarPorId_decorators = [criarLoggerCompleto({ nivel: "info", incluirTimestamp: true, incluirNomeDaClasse: true })];
            _listarTodos_decorators = [criarLoggerCompleto({ nivel: "debug", incluirTimestamp: false, incluirNomeDaClasse: false })];
            __esDecorate(this, null, _buscarPorId_decorators, { kind: "method", name: "buscarPorId", static: false, private: false, access: { has: obj => "buscarPorId" in obj, get: obj => obj.buscarPorId }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _listarTodos_decorators, { kind: "method", name: "listarTodos", static: false, private: false, access: { has: obj => "listarTodos" in obj, get: obj => obj.listarTodos }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        buscarPorId(id) {
            return { id, nome: `Usuário ${id}` };
        }
        listarTodos() {
            return [
                { id: 1, nome: "Walter" },
                { id: 2, nome: "Maria" }
            ];
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const repositorio = new RepositorioDeUsuarios();
console.log(repositorio.buscarPorId(1));
console.log(repositorio.listarTodos());
function criarValidadorComposto(regras) {
    return function (metodoOriginal, contexto) {
        function metodoSubstituto(...args) {
            for (let indice = 0; indice < args.length; indice++) {
                for (const regra of regras) {
                    if (!regra.validar(args[indice])) {
                        throw new Error(`Argumento ${indice + 1} em "${String(contexto.name)}": ${regra.mensagemDeErro}`);
                    }
                }
            }
            return metodoOriginal.apply(this, args);
        }
        return metodoSubstituto;
    };
}
const regraDeEmail = {
    validar: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    mensagemDeErro: "Formato de email inválido"
};
const regraDeTextoNaoVazio = {
    validar: (texto) => texto.trim().length > 0,
    mensagemDeErro: "Texto não pode ser vazio"
};
let ServicoDeCadastro = (() => {
    let _instanceExtraInitializers = [];
    let _registrarEmail_decorators;
    return class ServicoDeCadastro {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _registrarEmail_decorators = [criarValidadorComposto([regraDeEmail, regraDeTextoNaoVazio])];
            __esDecorate(this, null, _registrarEmail_decorators, { kind: "method", name: "registrarEmail", static: false, private: false, access: { has: obj => "registrarEmail" in obj, get: obj => obj.registrarEmail }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        registrarEmail(email) {
            return `Email "${email}" registrado com sucesso`;
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
const cadastro = new ServicoDeCadastro();
console.log(cadastro.registrarEmail("walter@example.com"));
try {
    cadastro.registrarEmail("email-inválido");
}
catch (erro) {
    console.error(erro.message);
}
try {
    cadastro.registrarEmail("   ");
}
catch (erro) {
    console.error(erro.message);
}
class UsuarioAutenticado {
    nome;
    permissoes = [];
    constructor(nome) {
        this.nome = nome;
    }
    adicionarPermissao(permissao) {
        this.permissoes.push(permissao);
    }
    temPermissao(permissaoNecessaria) {
        return this.permissoes.some(p => p.recurso === permissaoNecessaria.recurso && p.acao === permissaoNecessaria.acao);
    }
}
let usuarioAtual;
function requererPermissao(permissaoNecessaria) {
    return function (metodoOriginal, contexto) {
        function metodoSubstituto(...args) {
            if (!usuarioAtual || !usuarioAtual.temPermissao(permissaoNecessaria)) {
                throw new Error(`Acesso negado a "${String(contexto.name)}". ` +
                    `Requer: ${permissaoNecessaria.acao} em ${permissaoNecessaria.recurso}.`);
            }
            return metodoOriginal.apply(this, args);
        }
        return metodoSubstituto;
    };
}
let ServicoDeAdministracao = (() => {
    let _instanceExtraInitializers = [];
    let _listarUsuarios_decorators;
    let _excluirUsuario_decorators;
    let _gerarRelatorio_decorators;
    return class ServicoDeAdministracao {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _listarUsuarios_decorators = [requererPermissao({ recurso: "usuarios", acao: "ler" })];
            _excluirUsuario_decorators = [requererPermissao({ recurso: "usuarios", acao: "excluir" })];
            _gerarRelatorio_decorators = [requererPermissao({ recurso: "relatorios", acao: "escrever" })];
            __esDecorate(this, null, _listarUsuarios_decorators, { kind: "method", name: "listarUsuarios", static: false, private: false, access: { has: obj => "listarUsuarios" in obj, get: obj => obj.listarUsuarios }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _excluirUsuario_decorators, { kind: "method", name: "excluirUsuario", static: false, private: false, access: { has: obj => "excluirUsuario" in obj, get: obj => obj.excluirUsuario }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _gerarRelatorio_decorators, { kind: "method", name: "gerarRelatorio", static: false, private: false, access: { has: obj => "gerarRelatorio" in obj, get: obj => obj.gerarRelatorio }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        listarUsuarios() {
            return ["Walter", "Maria", "João"];
        }
        excluirUsuario(nome) {
            return `Usuário ${nome} excluído`;
        }
        gerarRelatorio(nomeDoRelatorio) {
            return `Relatório ${nomeDoRelatorio} gerado`;
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
// Simula um usuário com permissões limitadas
usuarioAtual = new UsuarioAutenticado("admin");
usuarioAtual.adicionarPermissao({ recurso: "usuarios", acao: "ler" });
usuarioAtual.adicionarPermissao({ recurso: "relatorios", acao: "escrever" });
const administracao = new ServicoDeAdministracao();
console.log(administracao.listarUsuarios());
console.log(administracao.gerarRelatorio("mensal"));
try {
    administracao.excluirUsuario("João");
}
catch (erro) {
    console.error(erro.message);
}
function criarCacheComExpiracao(tempoDeVidaEmMs) {
    return function (metodoOriginal, contexto) {
        const cache = new Map();
        function metodoSubstituto(...args) {
            const chave = `${String(contexto.name)}:${JSON.stringify(args)}`;
            const agora = Date.now();
            const entrada = cache.get(chave);
            if (entrada && agora < entrada.expiraEm) {
                console.log(`Cache hit: ${chave}`);
                return entrada.valor;
            }
            if (entrada) {
                cache.delete(chave);
            }
            const resultado = metodoOriginal.apply(this, args);
            cache.set(chave, {
                valor: resultado,
                timestamp: agora,
                expiraEm: agora + tempoDeVidaEmMs
            });
            return resultado;
        }
        return metodoSubstituto;
    };
}
function registrarNaInicializacao(alvo, contexto) {
    // addInitializer executa quando a classe é definida
    // Útil para registro, configuração ou preparação
    contexto.addInitializer(function () {
        console.log(`Classe "${alvo.name}" inicializada.`);
    });
    return alvo;
}
let ServicoDeConsultaDePrecos = (() => {
    let _classDecorators = [registrarNaInicializacao];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _consultarPreco_decorators;
    let _calcularDesconto_decorators;
    var ServicoDeConsultaDePrecos = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _consultarPreco_decorators = [criarCacheComExpiracao(3000)];
            _calcularDesconto_decorators = [criarCacheComExpiracao(5000)];
            __esDecorate(this, null, _consultarPreco_decorators, { kind: "method", name: "consultarPreco", static: false, private: false, access: { has: obj => "consultarPreco" in obj, get: obj => obj.consultarPreco }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _calcularDesconto_decorators, { kind: "method", name: "calcularDesconto", static: false, private: false, access: { has: obj => "calcularDesconto" in obj, get: obj => obj.calcularDesconto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ServicoDeConsultaDePrecos = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        consultarPreco(codigoDoProduto) {
            console.log(`Consultando preço de ${codigoDoProduto}...`);
            const precos = {
                "PROD-001": 99.90,
                "PROD-002": 149.90,
                "PROD-003": 199.90
            };
            return precos[codigoDoProduto] || 0;
        }
        calcularDesconto(preco, percentual) {
            console.log(`Calculando desconto de ${percentual}% sobre R$ ${preco}...`);
            return preco * (1 - percentual / 100);
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    return ServicoDeConsultaDePrecos = _classThis;
})();
const consulta = new ServicoDeConsultaDePrecos();
console.log(consulta.consultarPreco("PROD-001"));
console.log(consulta.consultarPreco("PROD-001"));
console.log(consulta.calcularDesconto(100, 10));
console.log(consulta.calcularDesconto(100, 10));
