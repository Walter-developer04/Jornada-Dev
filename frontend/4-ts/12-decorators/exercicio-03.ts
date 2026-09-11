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

// ==============================================================
// EXEMPLO 1: Field decorator que executa na inicialização
// ==============================================================
// Demonstra que o field decorator recebe undefined como primeiro
// argumento e pode retornar uma função inicializadora.
// NÃO intercepta acessos futuros à propriedade.

function logarInicializacaoDoCampo(
    valorInicial: undefined,
    contexto: ClassFieldDecoratorContext
) {
    console.log(`Campo "${String(contexto.name)}" sendo decorado.`);
    
    // Retorna uma função que será chamada com o valor inicial
    return function(valorDaPropriedade: unknown) {
        console.log(`Campo "${String(contexto.name)}" inicializado com:`, valorDaPropriedade);
        return valorDaPropriedade;
    };
}

class ConfiguracaoDoSistema {
    @logarInicializacaoDoCampo
    nomeDaAplicacao: string = "Sistema Web";
}

const config = new ConfiguracaoDoSistema();
console.log(config.nomeDaAplicacao);

// ==============================================================
// EXEMPLO 2: Field decorator que transforma o valor inicial
// ==============================================================
// Demonstra como um field decorator pode modificar o valor
// inicial de uma propriedade.

function padronizarTextoDoCampo(
    valorInicial: undefined,
    contexto: ClassFieldDecoratorContext
) {
    return function(valorDaPropriedade: unknown) {
        if (typeof valorDaPropriedade === "string") {
            return valorDaPropriedade.trim().toLowerCase();
        }
        return valorDaPropriedade;
    };
}

class DadosDoUsuario {
    @padronizarTextoDoCampo
    email: string = "  WALTER@EXAMPLE.COM  ";
    
    @padronizarTextoDoCampo
    nomeCompleto: string = "  Walter Silva  ";
}

const dados = new DadosDoUsuario();
console.log(dados.email);
console.log(dados.nomeCompleto);

// ==============================================================
// EXEMPLO 3: Auto-accessor que controla get e set
// ==============================================================
// Demonstra o uso de "accessor" keyword para criar um accessor
// que permite interceptar leituras e escritas da propriedade.
// Diferente de field decorators, este SIM intercepta acessos.

function logarAcessoDaPropriedade<This, Valor>(
    accessorOriginal: {
        get(this: This): Valor;
        set(this: This, valor: Valor): void;
    },
    contexto: ClassAccessorDecoratorContext<This, Valor>
) {
    return {
        get(this: This): Valor {
            console.log(`Lendo "${String(contexto.name)}"`);
            return accessorOriginal.get.call(this);
        },
        set(this: This, valor: Valor): void {
            console.log(`Escrevendo "${String(contexto.name)}":`, valor);
            accessorOriginal.set.call(this, valor);
        }
    };
}

class ContadorDeAcessos {
    @logarAcessoDaPropriedade
    accessor valorAtual: number = 0;
}

const contador = new ContadorDeAcessos();
contador.valorAtual = 10;
const valor = contador.valorAtual;
console.log("Valor final:", valor);

// ==============================================================
// EXEMPLO 4: Auto-accessor com validação
// ==============================================================
// Demonstra validação em tempo de escrita usando auto-accessor.
// O setter é interceptado e pode rejeitar valores inválidos.

function validarValorPositivo<This>(
    accessorOriginal: {
        get(this: This): number;
        set(this: This, valor: number): void;
    },
    contexto: ClassAccessorDecoratorContext<This, number>
) {
    return {
        get(this: This): number {
            return accessorOriginal.get.call(this);
        },
        set(this: This, valor: number): void {
            if (valor < 0) {
                throw new Error(`"${String(contexto.name)}" não pode ser negativo. Recebido: ${valor}`);
            }
            accessorOriginal.set.call(this, valor);
        }
    };
}

class Produto {
    @validarValorPositivo
    accessor preco: number = 0;
    
    @validarValorPositivo
    accessor quantidadeEmEstoque: number = 0;
}

const produto = new Produto();
produto.preco = 99.90;
produto.quantidadeEmEstoque = 10;
console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);

try {
    produto.preco = -50;
} catch (erro) {
    console.error(erro.message);
}
