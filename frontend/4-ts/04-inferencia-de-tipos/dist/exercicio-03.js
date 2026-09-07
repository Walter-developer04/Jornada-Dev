"use strict";
/**
 * exercicio 03 — melhor tipo comum (best common type)
 * demonstra como o typescript encontra o tipo comum entre multiplas expressoes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ===== arrays com tipos mistos =====
const valoresMistos = [1, "ola", true];
// inferido como: (string | number | boolean)[]
// ===== funcao com retorno de tipos diferentes =====
function criarValor(tipo) {
    if (tipo === "texto") {
        return "exemplo";
    }
    else {
        return 42;
    }
}
console.log(criarValor);
// o melhor tipo comum entre Cachorro e Gato e Animal
const animais = [
    { nome: "rex", raca: "pastor" },
    { nome: "mimi", cor: "preto" },
];
// ===== funcao que aceita uniao =====
function processarEntrada(entrada) {
    if (typeof entrada === "string") {
        return entrada.toUpperCase();
    }
    else {
        return entrada * 2;
    }
}
// retorno inferido como: string | number
// ===== verificando tipos =====
const resultadoTexto = processarEntrada("hello"); // string
const resultadoNumero = processarEntrada(42); // number
// ===== verificando valores =====
console.log(JSON.stringify(valoresMistos));
console.log(JSON.stringify(animais));
console.log(resultadoTexto); // HELLO
console.log(resultadoNumero); // 84
