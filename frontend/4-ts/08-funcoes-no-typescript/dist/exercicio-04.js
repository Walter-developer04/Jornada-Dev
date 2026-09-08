"use strict";
// O que é?
// Tipagem explícita dos parâmetros e do valor de retorno.
// Para que serve?
// Garantir que a função receba e retorne os tipos corretos, prevenindo erros.
function calcularArea(largura, altura) {
    return largura * altura;
}
// Erro esperado se tentar passar strings:
// const area = calcularArea("10", "5");
console.log(calcularArea(10, 5));
