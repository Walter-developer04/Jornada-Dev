// ============================================================================
// EXERCICIO 02 - TIPOS GENERICOS
// ----------------------------------------------------------------------------
// O QUE SAO: alem de funcoes genericas, o TypeScript permite criar TIPOS
// genericos: apelidos de tipo (type) e interfaces com parametros de tipo.
//
// PARA QUE SERVEM: descrevem a FORMA de um dado deixando "buracos" (A, B, T)
// que serao preenchidos no momento do uso.
//
// DIFERENCA DIDATICA:
//   - Generico em FUNCAO: reaproveita a LOGICA para varios tipos.
//   - TIPO generico: reaproveita a FORMA (a estrutura) para varios tipos.
//
// COMO USAR / SINTAXE:
//     type Nome<A, B> = { ... };
//     interface Nome<T> { ... }
//
// QUANDO USAR: quando a mesma estrutura serve para conteudos de tipos
// diferentes (pares, envelopes de resposta, colecoes, moldes de funcao).
// QUANDO NAO USAR: se a estrutura so faz sentido com um tipo fixo,
// um tipo concreto e mais simples.
//
// Observacao: cada exemplo fica isolado entre chaves { } para que os nomes
// de um exemplo nao entrem em conflito com os nomes de outro.
// ============================================================================


// ============================================================================
// EXEMPLO 1 - Apelido de tipo (type) generico: um molde com dois buracos
// ----------------------------------------------------------------------------
// Par<A, B> descreve qualquer objeto com "primeiro" do tipo A e "segundo"
// do tipo B. Os nomes A e B sao livres; poderiam ser T e U, por exemplo.
// ============================================================================

{
    type Par<A, B> = {
        primeiro: A;
        segundo: B;
    };

    // Preenchemos A = number e B = number:
    const coordenada: Par<number, number> = { primeiro: 10, segundo: 20 };
    console.log(coordenada.primeiro + coordenada.segundo); // 30

    // O MESMO molde, agora com A = string e B = boolean:
    const configuracao: Par<string, boolean> = { primeiro: "modoEscuro", segundo: true };
    console.log(configuracao.primeiro.toUpperCase()); // MODOESCURO
    console.log(configuracao.segundo ? "ligado" : "desligado"); // ligado
}


// ============================================================================
// EXEMPLO 2 - Interface generica: a mesma forma para conteudos diferentes
// ----------------------------------------------------------------------------
// Envelope<T> descreve qualquer pacote que carrega dados do tipo T junto
// de um indicador de carregamento.
// ============================================================================

{
    interface Envelope<T> {
        carregado: boolean;
        dados: T;
    }

    // T preenchido com um objeto { nome, idade }:
    const respostaCliente: Envelope<{ nome: string; idade: number }> = {
        carregado: true,
        dados: { nome: "Rita", idade: 31 },
    };
    console.log(respostaCliente.dados.nome); // Rita
    console.log(respostaCliente.dados.idade + 1); // 32

    // T preenchido com um array de strings:
    const respostaEtiquetas: Envelope<string[]> = {
        carregado: false,
        dados: [],
    };
    console.log(respostaEtiquetas.dados.length); // 0

    // respostaEtiquetas.dados.push(7); // ERRO: dados e string[] e nao aceita 7
}


// ============================================================================
// EXEMPLO 3 - Tipo generico que descreve FUNCOES
// ----------------------------------------------------------------------------
// Transformador<T> e o molde de "qualquer funcao que recebe T e devolve T".
// Atencao: aqui NAO estamos escrevendo uma funcao generica; estamos criando
// um TIPO que outras funcoes precisam respeitar. Essa e a diferenca central
// entre "generico aplicado em funcao" e "tipo generico".
// ============================================================================

{
    type Transformador<T> = (entrada: T) => T;

    // Funcoes concretas que se encaixam no molde
    // (o tipo de "entrada" e deduzido pelo proprio molde):
    const dobrar: Transformador<number> = function (entrada) {
        return entrada * 2;
    };

    const gritar: Transformador<string> = function (entrada) {
        return entrada.toUpperCase();
    };

    console.log(dobrar(21)); // 42
    console.log(gritar("typescript")); // TYPESCRIPT

    // O molde tambem serve como tipo de parametros de outras funcoes:
    function aplicarDuasVezes<T>(valor: T, operacao: Transformador<T>): T {
        return operacao(operacao(valor));
    }

    console.log(aplicarDuasVezes(5, dobrar)); // 20
    console.log(aplicarDuasVezes("ab", gritar)); // AB
}


// ============================================================================
// EXEMPLO 4 - Interface generica com metodos: o T circulando pela estrutura
// ----------------------------------------------------------------------------
// Em interfaces com metodos, o parametro de tipo aparece nos parametros e
// nos retornos dos metodos. Abaixo, implementamos Pilha<T> sem classes,
// apenas com um objeto comum criado por uma funcao.
// ============================================================================

{
    interface Pilha<T> {
        empilhar(item: T): void;
        desempilhar(): T | undefined;
        topo(): T | undefined;
    }

    // Criando uma pilha de strings (T = string):
    function criarHistorico(): Pilha<string> {
        const itens: string[] = [];
        return {
            empilhar: function (item: string): void {
                itens.push(item);
            },
            desempilhar: function (): string | undefined {
                return itens.pop();
            },
            topo: function (): string | undefined {
                return itens.length > 0 ? itens[itens.length - 1] : undefined;
            },
        };
    }

    const historico = criarHistorico();
    historico.empilhar("pagina inicial");
    historico.empilhar("pagina de genericos");
    console.log(historico.topo()); // pagina de genericos
    console.log(historico.desempilhar()); // pagina de genericos
    console.log(historico.topo()); // pagina inicial

    // O MESMO tipo Pilha<T> serviria para outros conteudos:
    // Pilha<number>, Pilha<Produto>... basta trocar o argumento de tipo.
}
