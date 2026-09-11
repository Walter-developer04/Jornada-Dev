// ============================================================================
// EXERCICIO 03 - RESTRICOES GENERICAS
// ----------------------------------------------------------------------------
// O QUE SAO: uma restricao generica LIMITA os tipos que um parametro de
// tipo aceita.
//
// PARA QUE SERVEM: dentro da funcao queremos usar membros especificos de T
// (propriedades, metodos), o que e impossivel se T pode ser qualquer coisa -
// o compilador nao saberia o que existe em T. A restricao garante o minimo.
//
// COMO USAR / SINTAXE:
//     function nome<T extends Formato>(...) { ... }
//     ("T pode ser qualquer tipo, DESDE QUE atenda ao formato exigido")
//
// QUANDO USAR: quando a logica precisa de membros garantidos em T.
// QUANDO NAO USAR: se a logica funciona com qualquer tipo, um generico
// livre (<T>) e suficiente.
//
// Observacao: cada exemplo fica isolado entre chaves { } para que os nomes
// de um exemplo nao entrem em conflito com os nomes de outro.
// ============================================================================


// ============================================================================
// EXEMPLO 1 - Restricao com interface: exigindo uma propriedade minima
// ----------------------------------------------------------------------------
// "T extends TemNome" exige que todo valor recebido tenha a propriedade
// "nome: string". Com isso, "alguem.nome" fica liberado dentro da funcao.
// ============================================================================

{
    interface TemNome {
        nome: string;
    }

    function saudar<T extends TemNome>(alguem: T): string {
        // Sem a restricao, "alguem.nome" seria um erro de compilacao,
        // pois T poderia ser number, boolean, ou qualquer outro tipo.
        return "Ola, " + alguem.nome + "!";
    }

    // Objetos com propriedades EXTRA continuam validos: eles atendem à
    // exigencia minima de ter "nome" do tipo string:
    const programadora = { nome: "Marina", linguagem: "TypeScript" };
    console.log(saudar(programadora)); // Ola, Marina!

    const cidade = { nome: "Recife", habitantes: 1650000 };
    console.log(saudar(cidade)); // Ola, Recife!

    // saudar(42); // ERRO: number nao possui "nome" e viola a restricao
}


// ============================================================================
// EXEMPLO 2 - Restricao com uniao de tipos primitivos
// ----------------------------------------------------------------------------
// A restricao nao precisa ser uma interface: pode ser qualquer tipo.
// Aqui, T precisa ser string OU number para entrar na formatacao.
// ============================================================================

{
    function descreverValor<T extends string | number>(valor: T): string {
        // Gracas à restricao, a verificacao de tipo estreita o valor:
        if (typeof valor === "string") {
            return "texto de " + valor.length + " caracteres";
        }
        return "numero recebido: " + valor;
    }

    console.log(descreverValor("genericos")); // texto de 9 caracteres
    console.log(descreverValor(3.14)); // numero recebido: 3.14

    // descreverValor(true); // ERRO: boolean nao atende à restricao
    // descreverValor([1, 2]); // ERRO: array tambem nao atende
}


// ============================================================================
// EXEMPLO 3 - Restricao com keyof: chaves garantidas
// ----------------------------------------------------------------------------
// "K extends keyof T" garante que a chave passada existe no objeto T.
// "keyof T" e a uniao das chaves de T, e o retorno T[K] e o tipo exato
// do campo acessado.
// ============================================================================

{
    type Produto = {
        nome: string;
        preco: number;
        disponivel: boolean;
    };

    function obterCampo<T, K extends keyof T>(objeto: T, campo: K): T[K] {
        // Sem "keyof", "campo" teria que ser apenas string, e nada
        // garantiria que a chave realmente existe no objeto recebido.
        return objeto[campo];
    }

    const caderno: Produto = { nome: "Caderno", preco: 15, disponivel: true };

    const nomeDoProduto: string = obterCampo(caderno, "nome");
    const precoDoProduto: number = obterCampo(caderno, "preco");
    console.log(nomeDoProduto); // Caderno
    console.log(precoDoProduto + 5); // 20

    // obterCampo(caderno, "cor"); // ERRO: "cor" nao e chave de Produto.
    // O erro e apontado NA COMPILACAO, antes de o programa rodar.
}


// ============================================================================
// EXEMPLO 4 - Restricao na pratica: busca por id em listas de qualquer tipo
// ----------------------------------------------------------------------------
// Exigindo apenas { id: number }, a mesma funcao serve para produtos,
// tarefas, clientes... desde que cada item tenha um "id".
// ============================================================================

{
    interface Identificavel {
        id: number;
    }

    function buscarPorId<T extends Identificavel>(itens: T[], idDesejado: number): T | undefined {
        for (const item of itens) {
            // "item.id" so e permitido por causa da restricao:
            if (item.id === idDesejado) {
                return item;
            }
        }
        return undefined;
    }

    type ProdutoLoja = { id: number; nome: string; preco: number };
    type Tarefa = { id: number; titulo: string; concluida: boolean };

    const produtos: ProdutoLoja[] = [
        { id: 1, nome: "teclado", preco: 120 },
        { id: 2, nome: "mouse", preco: 60 },
    ];

    const tarefas: Tarefa[] = [
        { id: 7, titulo: "estudar genericos", concluida: false },
        { id: 8, titulo: "fazer exercicios", concluida: true },
    ];

    // O retorno e T | undefined: o id pode nao existir, e o proprio tipo
    // nos obriga a tratar essa possibilidade antes de usar o resultado:
    const produtoEncontrado = buscarPorId(produtos, 2);
    console.log(produtoEncontrado ? produtoEncontrado.nome : "nao encontrado"); // mouse

    const tarefaEncontrada = buscarPorId(tarefas, 8);
    console.log(tarefaEncontrada ? tarefaEncontrada.titulo : "nao encontrado"); // fazer exercicios

    // buscarPorId(produtos, 99) devolveria undefined, e o tipo T | undefined
    // exigiria tratar esse caso antes de acessar .nome ou .preco.
}
