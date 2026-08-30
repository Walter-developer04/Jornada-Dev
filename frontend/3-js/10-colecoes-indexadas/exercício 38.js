// EXERCÍCIO 38 — Convertendo entre Array e TypedArray

const u8 = new Uint8Array([10, 20, 30]);

// TypedArray -> Array comum
const comum = Array.from(u8);
console.log(Array.isArray(comum)); // true
console.log(comum); // [ 10, 20, 30 ]

// Array -> TypedArray
const deArray = Uint8Array.from([5, 6, 7]);
console.log(deArray); // Uint8Array(3) [ 5, 6, 7 ]

// Versões estáticas de Array.of também existem
console.log(Uint8Array.of(1, 2, 3)); // Uint8Array(3) [ 1, 2, 3 ]

// Métodos conhecidos funcionam, e devolvem TypedArray do MESMO tipo
const dobrados = u8.map((n) => n * 2);
console.log(dobrados); // Uint8Array(3) [ 20, 40, 60 ]

// slice() também devolve TypedArray
console.log(u8.slice(1)); // Uint8Array(2) [ 20, 30 ]
