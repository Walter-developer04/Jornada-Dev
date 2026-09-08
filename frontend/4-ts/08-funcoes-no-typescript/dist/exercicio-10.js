"use strict";
// O que é?
// Parâmetros que não precisam ser passados na chamada, marcados com ?.
// Para que serve?
// Flexibilizar funções onde certos argumentos são desnecessários.
function formatarNome(nome, sobrenome) {
    if (sobrenome) {
        return `${nome} ${sobrenome}`;
    }
    return nome;
}
console.log(formatarNome("João"));
console.log(formatarNome("João", "Silva"));
