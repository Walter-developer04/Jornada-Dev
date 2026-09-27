"use strict";
// Namespace Augmentation: redeclarar um namespace para adicionar membros
// O TypeScript funde as declaracoes (declaration merging)
// Segunda declaracao do mesmo namespace: ampliacao
var Loja;
(function (Loja) {
    // Pode usar o tipo declarado no bloco anterior (merge)
    function exibirProduto(produto) {
        return produto.nome + " custa " + produto.preco;
    }
    Loja.exibirProduto = exibirProduto;
})(Loja || (Loja = {}));
// Estrutura ampliada: um unico namespace com Produto e exibirProduto
const item = { nome: "Caderno", preco: 15 };
console.log(Loja.exibirProduto(item)); // Caderno custa 15
