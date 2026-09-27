"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implementacao real do metodo adicionado
String.prototype.primeiroMaiusculo = function () {
    const texto = String(this);
    return texto.charAt(0).toUpperCase() + texto.slice(1);
};
// Uso: o TypeScript agora reconhece o metodo em qualquer string
console.log("typescript".primeiroMaiusculo()); // Typescript
