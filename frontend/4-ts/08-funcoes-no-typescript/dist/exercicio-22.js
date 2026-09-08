"use strict";
// O que é?
// O TypeScript verifica as assinaturas de cima para baixo.
function buscar(id, completo) {
    if (completo) {
        return { dados: `Dados completos de ${id}` };
    }
    return `Dados simples de ${id}`;
}
console.log(buscar(1));
console.log(buscar(1, true));
console.log(buscar(1, false));
