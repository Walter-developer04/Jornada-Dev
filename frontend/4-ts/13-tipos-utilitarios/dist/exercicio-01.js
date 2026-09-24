"use strict";
// Partial<T> transforma todas as propriedades de T em opcionais.
// Util quando precisamos representar uma atualizacao parcial de um objeto.
// Como sao opcionais, podemos informar somente as que queremos alterar.
const atualizacao = {
    idade: 30,
};
function atualizarUsuario(usuario, dados) {
    return { ...usuario, ...dados };
}
const usuarioOriginal = {
    nome: "Maria",
    email: "maria@exemplo.com",
    idade: 28,
};
const usuarioAtualizado = atualizarUsuario(usuarioOriginal, atualizacao);
console.log(usuarioAtualizado);
// { nome: 'Maria', email: 'maria@exemplo.com', idade: 30 }
