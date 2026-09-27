"use strict";
// Namespace: agrupa nomes relacionados em um unico escopo
var Matematica;
(function (Matematica) {
    // Membro interno: existe no namespace, mas nao e exportado
    const fatorPadrao = 2;
    // Membros exportados: ficam acessiveis fora do namespace
    function dobro(valor) {
        return valor * fatorPadrao; // usa o membro interno
    }
    Matematica.dobro = dobro;
    function somar(a, b) {
        return a + b;
    }
    Matematica.somar = somar;
})(Matematica || (Matematica = {}));
// Acesso aos membros exportados pelo nome qualificado
console.log(Matematica.dobro(5)); // 10
console.log(Matematica.somar(3, 4)); // 7
// Matematica.fatorPadrao nao e acessivel aqui: erro de compilacao
