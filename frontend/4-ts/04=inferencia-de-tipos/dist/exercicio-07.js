"use strict";
/*
 * exercicio 07 — inferencia com any implicito (noImplicitAny)
 * demonstra casos onde o typescript nao consegue inferir e usa any.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ===== caso 1: variavel sem inicializacao =====
// let valorNaoInicializado;  // ERRO COM noImplicitAny: implicitamente any
let valorInicializado = "texto"; // ok: inferido como string
// ===== caso 2: parametro sem anotacao =====
// function processar(parametro) {  // ERRO COM noImplicitAny
//   return parametro;
// }
function processarCorreto(parametro) {
    return parametro;
}
// ===== caso 3: array vazio =====
let arrayVazio = []; // ok: explicitamente tipado
// let arrayImplicito = [];         // inferido como: any[] (sem noImplicitAny)
// ===== caso 4: usando unknown em vez de any =====
function verificarTipo(valor) {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    }
    return "nao e string";
}
const resultado1 = verificarTipo("ola"); // "OLA"
const resultado2 = verificarTipo(42); // "nao e string"
// ===== caso 5: type guards =====
function eString(valor) {
    return typeof valor === "string";
}
function processarDesconhecido(valor) {
    if (eString(valor)) {
        // aqui valor e inferido como: string
        console.log(valor.length);
    }
    else if (typeof valor === "number") {
        // aqui valor e inferido como: number
        console.log(valor * 2);
    }
}
// ===== caso 6: genericos em vez de any =====
function primeiroElemento(array) {
    return array[0];
}
const primeiro = primeiroElemento([1, 2, 3]); // primeiro: number | undefined
function converter(valor) {
    if (typeof valor === "string") {
        return parseInt(valor);
    }
    return valor.toString();
}
const deString = converter("42"); // deString: number
const deNumero = converter(42); // deNumero: string
// ===== verificando valores =====
console.log(valorInicializado); // texto
console.log(processarCorreto("teste")); // teste
console.log(JSON.stringify(arrayVazio)); // []
console.log(resultado1); // OLA
console.log(resultado2); // nao e string
processarDesconhecido("texto");
processarDesconhecido(42);
console.log(primeiro); // 1
console.log(deString); // 42
console.log(deNumero); // "42"
