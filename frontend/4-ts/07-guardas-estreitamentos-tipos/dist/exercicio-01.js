"use strict";
// O que é?
// typeof é um operador JavaScript que retorna uma string indicando o tipo de um valor.
// Para que serve?
// O TypeScript usa typeof como type guard para fazer narrowing de tipos.
// Como usar?
// Compare o resultado de typeof com strings específicas como "string", "number", etc.
// Sintaxe:
// if (typeof valor === "string") { ... }
function padLeft(padding, input) {
    if (typeof padding === "number") {
        // Dentro deste branch, padding é number
        return " ".repeat(padding) + input;
    }
    // Fora do if, padding é string
    return padding + input;
}
console.log(padLeft(5, "texto"));
console.log(padLeft(">> ", "texto"));
