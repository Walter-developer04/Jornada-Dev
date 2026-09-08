"use strict";
// O que é?
// O TypeScript deduz o tipo genérico <T> com base no argumento passado.
// Para que serve?
// Simplificar a chamada de funções genéricas sem precisar declarar os tipos.
function obterPrimeiro(lista) {
    return lista[0];
}
const numeros = [10, 20, 30];
const palavras = ["a", "b", "c"];
// T é inferido como number e string automaticamente
console.log(obterPrimeiro(numeros));
console.log(obterPrimeiro(palavras));
