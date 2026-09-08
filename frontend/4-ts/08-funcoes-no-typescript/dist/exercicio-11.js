"use strict";
// O que é?
// Parâmetros que recebem um valor inicial caso nenhum seja fornecido.
// Para que serve?
// Evitar verificações manuais de undefined e fornecer fallbacks claros.
function calcularDesconto(preco, porcentagem = 10) {
    return preco - (preco * porcentagem) / 100;
}
console.log(calcularDesconto(100)); // Usa 10%
console.log(calcularDesconto(100, 20)); // Usa 20%
