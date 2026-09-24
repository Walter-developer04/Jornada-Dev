"use strict";
// Pick<T, K> seleciona apenas as propriedades informadas de T.
// O segundo argumento recebe as chaves que devem ser mantidas no novo tipo.
const resumo = {
    nome: "Notebook",
    preco: 3500,
};
// Propriedades como id e descricao nao fazem parte deste tipo.
console.log(resumo);
// { nome: 'Notebook', preco: 3500 }
