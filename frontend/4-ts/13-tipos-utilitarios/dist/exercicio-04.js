"use strict";
// Readonly<T> marca todas as propriedades de T como somente leitura.
// Apos aplicar, qualquer atribuicao a essas propriedades gera erro de tipo.
const config = {
    tema: "escuro",
    idioma: "pt-BR",
};
// config.tema = "claro";
// A linha acima nao compila porque Readonly impede a reatribuicao.
console.log(config);
// { tema: 'escuro', idioma: 'pt-BR' }
