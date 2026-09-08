"use strict";
// O que é?
// Atribuição de uma função a uma variável (function expression).
// Para que serve?
// Tratar a função como um valor que pode ser passado ou armazenado.
const multiplicar = function (a, b) {
    return a * b;
};
const resultado = multiplicar(5, 4);
console.log(resultado);
