"use strict";
// O que é?
// Comparar com null usando !== remove null do tipo.
// Para que serve?
// Quando você precisa garantir que algo não é null antes de usar.
// Sintaxe:
// if (valor !== null) { /* valor não é null */ }
function processarArray(items) {
    if (items !== null) {
        // items é string[]
        console.log(items.length);
        items.forEach(item => console.log(item));
    }
    else {
        // items é null
        console.log("Array é null");
    }
}
processarArray(["a", "b", "c"]);
processarArray(null);
