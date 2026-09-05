"use strict";
// Enumerações com "enum".
//
// Para que isso serve?
// Permite declarar um conjunto de constantes nomeadas, facilitando a legibilidade e organização de opções e estados finitos no código.
//
// Qual comportamento devo observar?
// O enum mapeia opções legíveis, impedindo o uso de valores literais soltos e restringindo escolhas ao grupo pré-definido.
var CategoriaChamado;
(function (CategoriaChamado) {
    CategoriaChamado[CategoriaChamado["Duvida"] = 0] = "Duvida";
    CategoriaChamado[CategoriaChamado["Sugestao"] = 1] = "Sugestao";
    CategoriaChamado[CategoriaChamado["Reclamacao"] = 2] = "Reclamacao";
})(CategoriaChamado || (CategoriaChamado = {}));
const chamadoAtual = CategoriaChamado.Sugestao;
console.log(chamadoAtual);
