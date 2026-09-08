"use strict";
// O que é?
// Um parâmetro fictício no início da função para tipar o contexto this.
const usuario = {
    nome: "Ana",
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome}`);
    },
};
usuario.apresentar();
// Erro esperado se desanexar a função sem bind:
// const apresentarSolto = usuario.apresentar;
// apresentarSolto();
