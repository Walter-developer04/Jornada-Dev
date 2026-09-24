"use strict";
// Parameters<T> extrai os tipos dos parametros de uma funcao em forma de tupla.
// O resultado pode ser usado para receber os mesmos argumentos da funcao original.
function cadastrarUsuario(nome, email, ativo) {
    return { nome, email, ativo };
}
const args = ["Ana", "ana@exemplo.com", true];
// A tupla pode ser espalhada diretamente na chamada da funcao.
const novoUsuario = cadastrarUsuario(...args);
console.log(novoUsuario);
// { nome: 'Ana', email: 'ana@exemplo.com', ativo: true }
