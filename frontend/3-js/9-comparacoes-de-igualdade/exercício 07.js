// SameValue é o algoritmo que o Object.is usa
// a diferença dele pro SameValueZero: aqui 0 e -0 são diferentes
console.log(Object.is(0, -0)); // false
console.log([0].includes(-0)); // true

// resumo rápido com os valores chatos
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log([NaN].includes(NaN)); // true
