// EXERCÍCIO 30 — flat() e flatMap(): achatar níveis

const aninhado = [1, [2, 3], [4, [5, 6]]];

// flat() achata 1 nível por padrão
console.log(aninhado.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]

// flat(n) achata n níveis
console.log(aninhado.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

// flatMap(): faz o map e já achata 1 nível no final
const frases = ["bom dia", "boa tarde"];
const palavras = frases.flatMap((f) => f.split(" "));
console.log(palavras); // [ 'bom', 'dia', 'boa', 'tarde' ]
