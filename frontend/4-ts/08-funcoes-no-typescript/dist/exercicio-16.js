"use strict";
// O que é?
// Um tipo seguro que aceita qualquer valor, mas exige verificação antes do uso.
// Para que serve?
// Receber dados externos ou dinâmicos sem perder a segurança de tipos.
function processarEntrada(valor) {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    }
    return "Entrada inválida.";
}
console.log(processarEntrada("texto"));
console.log(processarEntrada(123));
