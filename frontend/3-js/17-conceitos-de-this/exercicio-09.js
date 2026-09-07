// ASSUNTO: Function.prototype.apply()

// O que é?
// É um método embutido de funções JavaScript que invoca a função alvo imediatamente,
// com um dado valor de "this", mas recebendo os argumentos sob a forma de um único
// ARRAY (ou um objeto similar a array / array-like).

// Para que serve?
// Serve para executar funções com vinculação explícita dinâmica quando os parâmetros
// a serem enviados já se encontram colecionados em uma lista ou array, evitando
// ter que desempacotar manualmente cada item antes do ECMAScript 6.

// Sintaxe:
// funcao.apply(thisArg, [argsArray])

// Como usar?
// Forneça como primeiro parâmetro o objeto de contexto ("this").
// Como segundo parâmetro, envie um array contendo todos os argumentos necessários.

// Quando deve usar?
// 1. Quando os argumentos já chegam na sua rotina estruturados como array.
// 2. Em funções variádicas legadas ou ao criar funções invólucro (wrappers) que
//    reencaminham a lista de argumentos integralmente para outra função.

// Por que usar nesses casos?
// Porque elimina a necessidade de saber antecipadamente a quantidade exata de parâmetros
// que a função exige.

// Quando não deve usar?
// Se você puder utilizar recursos modernos do ES6+ (Spread Operator `...`),
// a combinação `funcao.call(thisArg, ...arrayDeArgs)` ou simplesmente `funcao(...arrayDeArgs)`
// costuma ser preferida por muitos desenvolvedores pela legibilidade.

// Por que não deve usar nesses casos?
// O spread operator realiza o espalhamento de maneira mais direta e limpa na sintaxe.

// Qual comportamento devo observar?
// A função executa imediatamente. Os elementos do array do segundo parâmetro
// são mapeados posicionalmente para os parâmetros declarados da função.

// ATENÇÃO:
// O segundo argumento de `apply` DEVE ser um array ou array-like (como o objeto arguments).
// Se você passar valores primitivos (ex: apply(this, "texto")), o comportamento pode ser
// imprevisível ou gerar TypeError dependendo do tipo.

// ERRO COMUM:
// Passar os argumentos soltos por vírgula em vez de dentro de um array:
// soma.apply(contexto, 1, 2, 3); // ERRO: TypeError: CreateListFromArrayLike called on non-object.

// REGRA:
// Lembre-se do mnemônico: "A de Apply = A de Array".
// Argumentos passados em array: funcao.apply(alvo, [a, b, c]).

// Exemplo Prático Executável:
"use strict";

const calculadoraFinanceira = {
  moeda: "USD",
  taxaCambio: 5.20,
  calcularTotal(imposto, frete, seguro) {
    const subtotal = this.precoBase + imposto + frete + seguro;
    const totalConvertido = subtotal * this.taxaCambio;
    console.log(`[exercicio-09] Produto: ${this.descricao}`);
    console.log(`[exercicio-09] Total original: ${this.moeda} ${subtotal.toFixed(2)} | Convertido (BRL): R$ ${totalConvertido.toFixed(2)}`);
  }
};

const pacoteImportacao = {
  descricao: "Servidor Rack 1U",
  precoBase: 1200
};

// Coleção de custos adicionais vindos, por exemplo, de uma API ou cálculo prévio:
const despesasAdicionais = [150, 80, 45]; // [imposto, frete, seguro]

console.log("[exercicio-09] Invocando com .apply() passando a lista completa de custos:");
// O método é executado imediatamente com 'pacoteImportacao' como this e o array descompactado:
calculadoraFinanceira.calcularTotal.apply(pacoteImportacao, despesasAdicionais);

// Exemplo clássico utilitário de apply: Math.max sobre coleções
const numeros = [10, 85, 34, 120, 4];
const maiorNumero = Math.max.apply(null, numeros); // Math.max não depende de this
console.log(`[exercicio-09] Maior valor obtido via Math.max.apply: ${maiorNumero}`);