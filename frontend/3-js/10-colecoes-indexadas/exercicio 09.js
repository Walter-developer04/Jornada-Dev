// EXERCÍCIO 09 — Array.from(): criar array a partir de outra coisa

// String é iterável: cada caractere vira um item
console.log(Array.from("abc")); // [ 'a', 'b', 'c' ]

// "Array-like": objeto com índices e length
const parecido = { 0: "a", 1: "b", length: 2 };
console.log(Array.from(parecido)); // [ 'a', 'b' ]

// Segundo argumento: transforma cada item na criação
const dobrados = Array.from([1, 2, 3], (n) => n * 2);
console.log(dobrados); // [ 2, 4, 6 ]

// Obs.: existe também Array.fromAsync() (ES2024) para iteráveis assíncronos
