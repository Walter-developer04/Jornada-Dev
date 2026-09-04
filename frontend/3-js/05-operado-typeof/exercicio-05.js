"use strict"

const pessoa = { nome: "Ana", idade: 20 };
const frutas = ["maçã", "banana"];

console.log(typeof pessoa);   // "object"
console.log(typeof frutas);   // "object" (array também responde object)
console.log(typeof {});       // "object"
console.log(typeof []);       // "object"