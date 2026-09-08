"use strict";
// O que é?
// Comparação entre usar overloads e usar union types ( | ).
// Quando usar:
// Se os tipos de retorno dependem de combinações específicas de parâmetros, use overloads.
// Se a entrada e saída são independentes ou simples, use union types.
// Com Union Types (mais simples):
function processarUniao(valor) {
    return valor;
}
function processarDependente(valor) {
    return valor;
}
console.log(processarUniao("texto"));
console.log(processarDependente(100));
