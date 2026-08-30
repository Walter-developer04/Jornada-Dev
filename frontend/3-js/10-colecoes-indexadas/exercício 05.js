// EXERCÍCIO 05 — Propriedade length

const fila = ["a", "b", "c"];
console.log(fila.length); // 3

// length é sempre "maior índice + 1"
fila[5] = "f";
console.log(fila.length); // 6

// Diminuir length CORTA o array pelo fim
const letras = ["a", "b", "c", "d"];
letras.length = 2;
console.log(letras); // [ 'a', 'b' ]

// length = 0 esvazia de uma vez
letras.length = 0;
console.log(letras); // []
