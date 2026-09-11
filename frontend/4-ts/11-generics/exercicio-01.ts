// ============================================================================
// EXERCICIO 01 - GENERICOS
// ----------------------------------------------------------------------------
// O QUE SAO: genericos permitem escrever funcoes, classes e estruturas que
// funcionam com varios tipos diferentes sem perder a seguranca de tipos.
//
// PARA QUE SERVEM: em vez de criar uma copia da funcao para cada tipo
// (ou usar "any", que desliga a verificacao do compilador), declaramos um
// PARAMETRO DE TIPO - normalmente chamado de T - preenchido na chamada.
//
// COMO USAR / SINTAXE:
//     function nomeDaFuncao<T>(parametro: T): T { ... }
//
// QUANDO USAR: quando a mesma logica serve para varios tipos.
// QUANDO NAO USAR: quando a logica so faz sentido para um tipo especifico;
// nesse caso, um tipo concreto (string, number, uma interface propria) e
// mais simples e suficiente.
//
// Observacao: cada exemplo fica isolado entre chaves { } para que os nomes
// de um exemplo nao entrem em conflito com os nomes de outro.
// ============================================================================


// ============================================================================
// EXEMPLO 1 - Funcao generica simples: o conceito basico
// ----------------------------------------------------------------------------
// A funcao recebe um valor de qualquer tipo e devolve o MESMO valor.
// O <T> liga o tipo do parametro ao tipo do retorno: o tipo e preservado.
// ============================================================================

{
    function ecoar<T>(valor: T): T {
        return valor;
    }

    // O TypeScript infere que T = string, entao "mensagem" e string:
    const mensagem: string = ecoar("estudando genericos");
    console.log(mensagem); // estudando genericos

    // Aqui T = number e inferido automaticamente pelo argumento:
    const quantidade: number = ecoar(42);
    console.log(quantidade); // 42

    // Tambem da para explicitar o tipo na chamada: nome<T>(argumento)
    const ativo: boolean = ecoar<boolean>(true);
    console.log(ativo); // true

    // Observacao: sem genericos, o parametro teria que ser "any" para aceitar
    // qualquer valor, e o TypeScript nao saberia mais o tipo do retorno.
}


// ============================================================================
// EXEMPLO 2 - Varios parametros de tipo na mesma funcao
// ----------------------------------------------------------------------------
// Uma funcao pode declarar mais de um parametro de tipo: <A, B>.
// Cada um e resolvido de forma independente, conforme os argumentos.
// ============================================================================

{
    function montarPar<A, B>(primeiro: A, segundo: B): { primeiro: A; segundo: B } {
        return { primeiro: primeiro, segundo: segundo };
    }

    // Na chamada abaixo, A = number e B = string:
    const combinacaoUm = montarPar(7, "sete");
    console.log(combinacaoUm.primeiro + 1); // 8 (number preservado)
    console.log(combinacaoUm.segundo.toUpperCase()); // SETE (string preservada)

    // Aqui, A = boolean e B = number[]:
    const combinacaoDois = montarPar(true, [10, 20, 30]);
    console.log(combinacaoDois.segundo.length); // 3 (number[] preservado)

    // Os tipos originais atravessam a funcao sem virar "any":
    // o reuso nao custou a seguranca de tipos.
}


// ============================================================================
// EXEMPLO 3 - Genericos com arrays: a mesma logica para qualquer lista
// ----------------------------------------------------------------------------
// T[] significa "array de T". A funcao inverte a lista recebida sem se
// importar com o tipo dos elementos e devolve T[] (e nao any[]).
// ============================================================================

{
    function inverterLista<T>(itens: T[]): T[] {
        const invertida: T[] = [];
        for (let indice = itens.length - 1; indice >= 0; indice--) {
            invertida.push(itens[indice]);
        }
        return invertida;
    }

    const numeros = inverterLista([1, 2, 3]); // T = number
    console.log(numeros); // [ 3, 2, 1 ]

    const palavras = inverterLista(["pao", "queijo", "cafe"]); // T = string
    // O compilador SABE que palavras e string[], entao isto e seguro:
    console.log(palavras[0].toUpperCase()); // CAFE

    // Um retorno que pode falhar inclui undefined no tipo:
    function primeiroElemento<T>(itens: T[]): T | undefined {
        return itens[0];
    }

    console.log(primeiroElemento(["Ana", "Bruno"])); // Ana
    console.log(primeiroElemento<string>([])); // undefined
}


// ============================================================================
// EXEMPLO 4 - Classe generica: reutilizando uma estrutura com tipo seguro
// ----------------------------------------------------------------------------
// Classes tambem aceitam parametros de tipo. A Caixa guarda um valor do
// tipo escolhido na criacao da instancia: Caixa<string>, Caixa<number>...
// ============================================================================

{
    class Caixa<T> {
        private conteudo: T;

        constructor(valorInicial: T) {
            this.conteudo = valorInicial;
        }

        guardar(novoValor: T): void {
            this.conteudo = novoValor;
        }

        obter(): T {
            return this.conteudo;
        }
    }

    // Aqui definimos T = string explicitamente:
    const caixaDeTexto = new Caixa<string>("chave de fenda");
    console.log(caixaDeTexto.obter()); // chave de fenda
    caixaDeTexto.guardar("chave inglesa");
    console.log(caixaDeTexto.obter()); // chave inglesa

    // caixaDeTexto.guardar(10); // ERRO de compilacao: 10 nao e string

    // Aqui T = number e inferido pelo argumento do construtor:
    const caixaDeNumero = new Caixa(99);
    console.log(caixaDeNumero.obter() + 1); // 100

    // Uma unica classe atendeu a varios tipos, e cada instancia ficou com o
    // seu proprio tipo verificado pelo compilador: reuso com seguranca.
}
