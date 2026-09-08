// =============================================================================
// EXERCÍCIO 03 - MÓDULOS EM JAVASCRIPT (CONCEITO GERAL)
// =============================================================================
//
// O QUE É:
// Um módulo é uma unidade de código com escopo próprio e responsabilidade
// própria. A ideia central é: cada parte do programa guarda seus dados e
// suas funções de forma isolada e expõe apenas uma interface pública, ou
// seja, a "lista de serviços" que os outros módulos podem usar.
//
// PARA QUE SERVE:
// - Evitar conflitos de nomes: cada módulo tem seu próprio escopo;
// - Isolar responsabilidades: uma parte cuida do estoque, outra das vendas;
// - Reutilizar código: um mesmo módulo serve em vários lugares;
// - Facilitar a manutenção: mudanças ficam confinadas ao módulo responsável.
//
// QUANDO USAR:
// - Quando o programa cresce demais e vira um "arquivo gigante";
// - Quando duas partes do código disputam os mesmos nomes de variáveis;
// - Quando a mesma lógica precisa ser aproveitada em vários pontos.
//
// QUANDO NÃO USAR:
// - Scripts muito pequenos e isolados, em que modularizar apenas adiciona
//   arquivos e complexidade sem trazer benefício real.
//
// AMBIENTE DE EXECUÇÃO:
// Este arquivo demonstra o PRINCÍPIO de modularidade usando JavaScript puro,
// sem require() e sem import/export. Execute com Node.js:
//     node exercicio-03.js
// =============================================================================

// -----------------------------------------------------------------------------
// PARTE 1 - O problema que os módulos resolvem: escopo compartilhado
// -----------------------------------------------------------------------------
// Abaixo, duas "partes" de um mesmo programa usam a MESMA variável declarada
// no escopo superior. Uma parte sobrescreve o valor da outra e o resultado
// sai errado. É o problema clássico do código sem modularização.

let nomeDoProduto = "Caderno";

function registrarProdutoDoEstoque() {
    nomeDoProduto = "Caneta"; // o estoque trocou o valor...
    console.log("[Estoque] produto registrado:", nomeDoProduto);
}

function imprimirEtiquetaDoProduto() {
    // ...e a etiqueta, que esperava "Caderno", imprime o valor trocado.
    console.log("[Etiqueta] produto da etiqueta:", nomeDoProduto);
}

registrarProdutoDoEstoque();
imprimirEtiquetaDoProduto();
console.log("[Problema] as duas partes disputaram a mesma variável nomeDoProduto.");
console.log("---");

// -----------------------------------------------------------------------------
// PARTE 2 - A solução: cada parte vira um módulo com escopo próprio
// -----------------------------------------------------------------------------
// A função abaixo funciona como um "módulo": tudo que é declarado dentro dela
// (dados e funções internas) fica PRIVADO, escondido do resto do código.
// No retorno, ela entrega apenas a interface pública: as operações que os
// outros módulos têm permissão de chamar. Esse foi o formato clássico de
// "fazer módulos" antes de o JavaScript ter sistemas de módulos entre
// arquivos, e é a melhor forma de ENTENDER o conceito.

function criarModuloEstoque() {
    // Dado privado: só existe dentro deste módulo.
    let nomeDoProdutoEmEstoque = "Caderno";

    function registrarProduto(novoNomeDeProduto) {
        nomeDoProdutoEmEstoque = novoNomeDeProduto;
    }

    function obterNomeDoProduto() {
        return nomeDoProdutoEmEstoque;
    }

    // Interface pública do módulo de estoque.
    return { registrarProduto, obterNomeDoProduto };
}

function criarModuloEtiqueta() {
    function imprimirEtiqueta(nomeDoProdutoParaEtiqueta) {
        console.log("[Etiqueta] etiqueta impressa para:", nomeDoProdutoParaEtiqueta);
    }

    // Interface pública do módulo de etiqueta.
    return { imprimirEtiqueta };
}

// -----------------------------------------------------------------------------
// PARTE 3 - Comunicação entre módulos: apenas pela interface pública
// -----------------------------------------------------------------------------
// Agora cada módulo tem os próprios dados, sem risco de conflito de nomes.
// Os módulos conversam SOMENTE chamando as funções da interface pública,
// nunca alterando as variáveis internas uns dos outros.

const moduloEstoque = criarModuloEstoque();
const moduloEtiqueta = criarModuloEtiqueta();

moduloEstoque.registrarProduto("Caneta");
console.log("[Estoque] nome atual do produto:", moduloEstoque.obterNomeDoProduto());

const nomeDoProdutoFornecidoPeloEstoque = moduloEstoque.obterNomeDoProduto();
moduloEtiqueta.imprimirEtiqueta(nomeDoProdutoFornecidoPeloEstoque);

console.log("[Solução] cada módulo guardou seus dados isoladamente.");
console.log("---");

// -----------------------------------------------------------------------------
// PARTE 4 - Arquivos e módulos na prática
// -----------------------------------------------------------------------------
// Em JavaScript real, os sistemas oficiais de módulos tratam cada ARQUIVO
// como um módulo, aplicando entre arquivos o mesmo princípio demonstrado
// acima (escopo próprio + interface pública):
//
//   - CommonJS (sistema original do Node.js): o arquivo exporta com
//     module.exports e importa com require(). Assunto do exercicio-01.js.
//
//   - ESM (módulos nativos da linguagem, ECMAScript): o arquivo exporta
//     com "export" e importa com "import". Funciona no Node.js e nos
//     navegadores. Assunto do exercicio-02.js.
//
// Independentemente do sistema escolhido, o conceito é sempre o mesmo:
// detalhes escondidos dentro do módulo e comunicação pela interface pública.

console.log("Resumo da ideia de módulos em JavaScript:");
console.log("1 módulo = 1 responsabilidade bem definida;");
console.log("dados internos ficam protegidos no escopo do próprio módulo;");
console.log("a comunicação entre módulos acontece pela interface pública;");
console.log("CommonJS e ESM são as formas oficiais de aplicar isso entre arquivos no Node.js.");
