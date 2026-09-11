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

// ==============================================================
// EXEMPLO 1: Sistema completo de logging com factory
// ==============================================================
// Demonstra um sistema de logging configurável com níveis,
// timestamps e contexto de execução.

type NivelDeLog = "debug" | "info" | "warn" | "error";

interface ConfiguracaoDoLogger {
    nivel: NivelDeLog;
    incluirTimestamp: boolean;
    incluirNomeDaClasse: boolean;
}

function criarLoggerCompleto(config: ConfiguracaoDoLogger) {
    return function<This, Args extends unknown[], Return>(
        metodoOriginal: (this: This, ...args: Args) => Return,
        contexto: ClassMethodDecoratorContext<This>
    ) {
        const nomeDoMetodo = String(contexto.name);
        
        function metodoSubstituto(this: This, ...args: Args): Return {
            const partesDoLog: string[] = [];
            
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
            } catch (erro) {
                console.error(`  Erro: ${erro instanceof Error ? erro.message : erro}`);
                throw erro;
            }
        }
        
        return metodoSubstituto;
    };
}

class RepositorioDeUsuarios {
    @criarLoggerCompleto({ nivel: "info", incluirTimestamp: true, incluirNomeDaClasse: true })
    buscarPorId(id: number): { id: number; nome: string } {
        return { id, nome: `Usuário ${id}` };
    }
    
    @criarLoggerCompleto({ nivel: "debug", incluirTimestamp: false, incluirNomeDaClasse: false })
    listarTodos(): Array<{ id: number; nome: string }> {
        return [
            { id: 1, nome: "Walter" },
            { id: 2, nome: "Maria" }
        ];
    }
}

const repositorio = new RepositorioDeUsuarios();
console.log(repositorio.buscarPorId(1));
console.log(repositorio.listarTodos());

// ==============================================================
// EXEMPLO 2: Sistema de validação com composição
// ==============================================================
// Demonstra validação de argumentos usando composição
// de decorators com diferentes regras.

interface RegraDeValidacao<T> {
    validar(valor: T): boolean;
    mensagemDeErro: string;
}

function criarValidadorComposto<T>(regras: RegraDeValidacao<T>[]) {
    return function<This>(
        metodoOriginal: (this: This, ...args: T[]) => unknown,
        contexto: ClassMethodDecoratorContext<This>
    ) {
        function metodoSubstituto(this: This, ...args: T[]): unknown {
            for (let indice = 0; indice < args.length; indice++) {
                for (const regra of regras) {
                    if (!regra.validar(args[indice])) {
                        throw new Error(
                            `Argumento ${indice + 1} em "${String(contexto.name)}": ${regra.mensagemDeErro}`
                        );
                    }
                }
            }
            return metodoOriginal.apply(this, args);
        }
        return metodoSubstituto;
    };
}

const regraDeEmail: RegraDeValidacao<string> = {
    validar: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    mensagemDeErro: "Formato de email inválido"
};

const regraDeTextoNaoVazio: RegraDeValidacao<string> = {
    validar: (texto) => texto.trim().length > 0,
    mensagemDeErro: "Texto não pode ser vazio"
};

class ServicoDeCadastro {
    @criarValidadorComposto([regraDeEmail, regraDeTextoNaoVazio])
    registrarEmail(email: string): string {
        return `Email "${email}" registrado com sucesso`;
    }
}

const cadastro = new ServicoDeCadastro();
console.log(cadastro.registrarEmail("walter@example.com"));

try {
    cadastro.registrarEmail("email-inválido");
} catch (erro) {
    console.error(erro.message);
}

try {
    cadastro.registrarEmail("   ");
} catch (erro) {
    console.error(erro.message);
}

// ==============================================================
// EXEMPLO 3: Controle de acesso com permissões
// ==============================================================
// Demonstra controle de acesso baseado em permissões
// usando decorator factory e addInitializer.

type Acao = "ler" | "escrever" | "excluir";
interface Permissao {
    recurso: string;
    acao: Acao;
}

class UsuarioAutenticado {
    private permissoes: Permissao[] = [];
    
    constructor(public nome: string) {}
    
    adicionarPermissao(permissao: Permissao): void {
        this.permissoes.push(permissao);
    }
    
    temPermissao(permissaoNecessaria: Permissao): boolean {
        return this.permissoes.some(
            p => p.recurso === permissaoNecessaria.recurso && p.acao === permissaoNecessaria.acao
        );
    }
}

let usuarioAtual: UsuarioAutenticado;

function requererPermissao(permissaoNecessaria: Permissao) {
    return function<This, Args extends unknown[], Return>(
        metodoOriginal: (this: This, ...args: Args) => Return,
        contexto: ClassMethodDecoratorContext<This>
    ) {
        function metodoSubstituto(this: This, ...args: Args): Return {
            if (!usuarioAtual || !usuarioAtual.temPermissao(permissaoNecessaria)) {
                throw new Error(
                    `Acesso negado a "${String(contexto.name)}". ` +
                    `Requer: ${permissaoNecessaria.acao} em ${permissaoNecessaria.recurso}.`
                );
            }
            return metodoOriginal.apply(this, args);
        }
        return metodoSubstituto;
    };
}

class ServicoDeAdministracao {
    @requererPermissao({ recurso: "usuarios", acao: "ler" })
    listarUsuarios(): string[] {
        return ["Walter", "Maria", "João"];
    }
    
    @requererPermissao({ recurso: "usuarios", acao: "excluir" })
    excluirUsuario(nome: string): string {
        return `Usuário ${nome} excluído`;
    }
    
    @requererPermissao({ recurso: "relatorios", acao: "escrever" })
    gerarRelatorio(nomeDoRelatorio: string): string {
        return `Relatório ${nomeDoRelatorio} gerado`;
    }
}

// Simula um usuário com permissões limitadas
usuarioAtual = new UsuarioAutenticado("admin");
usuarioAtual.adicionarPermissao({ recurso: "usuarios", acao: "ler" });
usuarioAtual.adicionarPermissao({ recurso: "relatorios", acao: "escrever" });

const administracao = new ServicoDeAdministracao();
console.log(administracao.listarUsuarios());
console.log(administracao.gerarRelatorio("mensal"));

try {
    administracao.excluirUsuario("João");
} catch (erro) {
    console.error(erro.message);
}

// ==============================================================
// EXEMPLO 4: Sistema integrado com addInitializer e cache
// ==============================================================
// Demonstra uso de addInitializer para preparar o objeto
// e um sistema de cache com expiração.

interface EntradaDeCache<T> {
    valor: T;
    timestamp: number;
    expiraEm: number;
}

function criarCacheComExpiracao(tempoDeVidaEmMs: number) {
    return function<This, Args extends unknown[], Return>(
        metodoOriginal: (this: This, ...args: Args) => Return,
        contexto: ClassMethodDecoratorContext<This>
    ) {
        const cache = new Map<string, EntradaDeCache<Return>>();
        
        function metodoSubstituto(this: This, ...args: Args): Return {
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

function registrarNaInicializacao(
    alvo: Function,
    contexto: ClassDecoratorContext
) {
    // addInitializer executa quando a classe é definida
    // Útil para registro, configuração ou preparação
    contexto.addInitializer(function() {
        console.log(`Classe "${alvo.name}" inicializada.`);
    });
    
    return alvo;
}

@registrarNaInicializacao
class ServicoDeConsultaDePrecos {
    @criarCacheComExpiracao(3000)
    consultarPreco(codigoDoProduto: string): number {
        console.log(`Consultando preço de ${codigoDoProduto}...`);
        const precos: Record<string, number> = {
            "PROD-001": 99.90,
            "PROD-002": 149.90,
            "PROD-003": 199.90
        };
        return precos[codigoDoProduto] || 0;
    }
    
    @criarCacheComExpiracao(5000)
    calcularDesconto(preco: number, percentual: number): number {
        console.log(`Calculando desconto de ${percentual}% sobre R$ ${preco}...`);
        return preco * (1 - percentual / 100);
    }
}

const consulta = new ServicoDeConsultaDePrecos();

console.log(consulta.consultarPreco("PROD-001"));
console.log(consulta.consultarPreco("PROD-001"));
console.log(consulta.calcularDesconto(100, 10));
console.log(consulta.calcularDesconto(100, 10));
