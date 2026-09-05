"use strict";
// Palavra-chave "satisfies".
//
// Para que isso serve?
// Serve para validar se um valor satisfaz a estrutura de um tipo sem forçar uma asserção ("as") e sem perder a inferência precisa do TypeScript.
//
// Qual comportamento devo observar?
// O TypeScript valida se a estrutura atende ao contrato, mantendo a tipagem exata dos valores para autocompletar e validações posteriores.
const temaAplicacao = {
    corPrincipal: "#1e293b",
    larguraMaximaPixels: 1200,
};
console.log(temaAplicacao.corPrincipal);
console.log(temaAplicacao.larguraMaximaPixels);
