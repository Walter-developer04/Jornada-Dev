"use strict";
// O que é?
// O TypeScript deduz automaticamente o tipo de retorno com base no que a função retorna.
// Para que serve?
// Evitar repetição de tipos quando o retorno é óbvio, mantendo a segurança de tipos.
function somarValores(a, b) {
    // O TS infere que o retorno é number
    return a + b;
}
const soma = somarValores(10, 20);
console.log(soma);
