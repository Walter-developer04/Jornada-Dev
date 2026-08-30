// EXERCÍCIO 29 — filter(): manter só quem passa no teste

const numeros = [10, 3, 25, 7, 40];

// Devolve um array novo só com os aprovados
const grandes = numeros.filter((n) => n >= 10);
console.log(grandes); // [ 10, 25, 40 ]

// Original intacto
console.log(numeros); // [ 10, 3, 25, 7, 40 ]

// Ninguém passa? Array vazio
console.log(numeros.filter((n) => n > 100)); // []
