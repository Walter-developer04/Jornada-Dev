"use strict";
// O que é?
// Regras do TypeScript para verificar se uma função pode ser atribuída a um tipo de função.
const somarSimples = (x, y) => x + y;
// Uma função que aceita menos parâmetros é compatível
const pegarPrimeiro = (x) => x * 2;
// Uma função que aceita mais parâmetros gera erro
// const erroParametros: OperacaoSimples = (x, y, z) => x + y + z; // Erro esperado
console.log(somarSimples(2, 3));
console.log(pegarPrimeiro(5, 10));
