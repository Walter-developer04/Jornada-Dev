"use strict";
// O tipo primitivo "number" no TypeScript.
//
// Para que isso serve?
// Representa dados numéricos, compreendendo tanto valores inteiros quanto decimais com ponto flutuante.
//
// Qual comportamento devo observar?
// O TypeScript assegura operações aritméticas corretas e impede atribuições de tipos incompatíveis.
const quantidadeEstoque = 35;
const precoUnitario = 12.50;
const valorTotalInventario = quantidadeEstoque * precoUnitario;
console.log(valorTotalInventario);
