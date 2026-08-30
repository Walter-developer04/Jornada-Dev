// EXERCÍCIO 07 — Array.isArray(): verificar se o valor é um array

const lista = [1, 2, 3];
console.log(Array.isArray(lista)); // true

// typeof não serve: array é um tipo de objeto
console.log(typeof lista); // 'object'

// Outros casos
console.log(Array.isArray("abc")); // false
console.log(Array.isArray({ 0: "a", length: 1 })); // false
console.log(Array.isArray(null)); // false
