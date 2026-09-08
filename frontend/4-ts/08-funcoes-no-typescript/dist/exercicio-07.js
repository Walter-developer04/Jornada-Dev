"use strict";
// O que é?
// O TypeScript infere os tipos dos parâmetros com base no local onde a função é chamada.
// Para que serve?
// Reduzir a verbosidade em callbacks, como em métodos de array.
const numeros = [1, 2, 3, 4];
// O TS sabe que numero é number por causa do array
const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados);
