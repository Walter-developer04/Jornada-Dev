// EXERCÍCIO 18 — reverse() e toReversed()

const numeros = [1, 2, 3];

// reverse() MUTA: inverte o próprio array
numeros.reverse();
console.log(numeros); // [ 3, 2, 1 ]

// toReversed() (ES2023) devolve uma cópia invertida
const original = ["a", "b", "c"];
const invertido = original.toReversed();
console.log(invertido); // [ 'c', 'b', 'a' ]
console.log(original); // [ 'a', 'b', 'c' ] (intacto)
