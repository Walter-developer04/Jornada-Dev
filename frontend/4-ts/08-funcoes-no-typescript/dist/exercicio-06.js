"use strict";
// O que é?
// Tipos que descrevem a assinatura de uma função, sem a implementação.
const executar = (a, b, operacao) => {
    return operacao(a, b);
};
const somar = (x, y) => x + y;
const dividir = (x, y) => x / y;
console.log(executar(10, 2, somar));
console.log(executar(10, 2, dividir));
