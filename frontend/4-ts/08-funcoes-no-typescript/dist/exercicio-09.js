"use strict";
// O que é?
// Um tipo de função invocado com a palavra-chave new.
// Para que serve?
// Tipar funções construtoras ou classes que podem ser instanciadas.
class Pessoa {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
function criarInstancia(Construtor, nome) {
    return new Construtor(nome);
}
const novaPessoa = criarInstancia(Pessoa, "Maria");
console.log(novaPessoa.nome);
