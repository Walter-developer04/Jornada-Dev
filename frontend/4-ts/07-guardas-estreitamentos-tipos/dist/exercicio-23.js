"use strict";
// O que é?
// Type predicates também fazem narrowing no branch else.
function isRetangulo(forma) {
    return forma.tipo === "retangulo";
}
function calcularArea(forma) {
    if (isRetangulo(forma)) {
        // forma é Retangulo
        return forma.largura * forma.altura;
    }
    else {
        // forma é Triangulo (TypeScript sabe!)
        return (forma.base * forma.altura) / 2;
    }
}
console.log(calcularArea({ tipo: "retangulo", largura: 5, altura: 3 }));
console.log(calcularArea({ tipo: "triangulo", base: 4, altura: 6 }));
