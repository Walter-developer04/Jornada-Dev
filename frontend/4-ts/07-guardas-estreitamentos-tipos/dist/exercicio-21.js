"use strict";
// O que é?
// Type guards personalizados são funções que retornam type predicates.
function isQuadrado(forma) {
    return forma.tipo === "quadrado";
}
function calcularArea(forma) {
    if (isQuadrado(forma)) {
        // forma é Quadrado
        return forma.lado * forma.lado;
    }
    else {
        // forma é Circulo
        return Math.PI * forma.raio * forma.raio;
    }
}
console.log(calcularArea({ tipo: "quadrado", lado: 5 }));
console.log(calcularArea({ tipo: "circulo", raio: 3 }));
