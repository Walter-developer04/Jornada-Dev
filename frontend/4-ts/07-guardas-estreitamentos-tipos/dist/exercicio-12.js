"use strict";
// O que é?
// Comparar duas variáveis com === também faz narrowing.
// Para que serve?
// Se x === y, TypeScript sabe que ambos têm o mesmo tipo.
// Comportamento:
// O tipo comum entre as duas variáveis é usado no branch.
function exemplo(x, y) {
    if (x === y) {
        // x e y são ambos string (único tipo comum)
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else {
        // x é string | number
        // y é string | boolean
        console.log(x, y);
    }
}
exemplo("texto", "texto");
exemplo(42, true);
