// EXERCÍCIO 16 — concat(): juntar arrays (não muta)

const a = [1, 2];
const b = [3, 4];

// Devolve um array novo com tudo junto
const junto = a.concat(b);
console.log(junto); // [ 1, 2, 3, 4 ]
console.log(a); // [ 1, 2 ] (intacto)

// Aceita vários argumentos, até valores soltos
const misto = a.concat(b, 5, [6, 7]);
console.log(misto); // [ 1, 2, 3, 4, 5, 6, 7 ]
