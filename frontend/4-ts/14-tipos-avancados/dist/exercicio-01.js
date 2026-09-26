"use strict";
// Assunto: Mapped Types
// Mapped Types criam um novo tipo transformando as propriedades de um tipo existente.
// A sintaxe [P in keyof T] percorre cada propriedade do tipo original.
// 4. Exemplo de utilizacao
const produto = {
    nome: "Teclado mecanico",
    preco: 250,
    disponivel: true,
};
// No tipo parcial, todas as propriedades sao opcionais.
const atualizacao = {
    preco: 199,
};
// No tipo somente leitura, os valores nao podem ser alterados depois da criacao.
const catalogo = {
    nome: "Monitor",
    preco: 900,
    disponivel: false,
};
// 5. Demonstracao do resultado
console.log("Produto completo:", produto);
console.log("Atualizacao parcial:", atualizacao);
console.log("Produto somente leitura:", catalogo);
// produto.preco = 100;   // funciona: Produto permite alteracao.
// catalogo.preco = 100;  // erro: propriedade readonly no tipo mapeado.
