"use strict";
// O que é?
// Desestruturar objetos ou arrays diretamente na assinatura da função.
function exibirPreco({ nome, preco }) {
    console.log(`O ${nome} custa R$ ${preco}`);
}
exibirPreco({ nome: "Teclado", preco: 150 });
