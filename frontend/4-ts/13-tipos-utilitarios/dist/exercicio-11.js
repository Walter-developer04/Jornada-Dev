"use strict";
// ReturnType<T> extrai o tipo de retorno de uma funcao.
// O resultado pode ser usado para tipar variaveis que receberao o retorno da funcao.
function gerarToken() {
    return Math.random().toString(36).slice(2);
}
const token = gerarToken();
console.log(token);
// ex: 4f1a2b...
