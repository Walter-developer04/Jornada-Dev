"use strict";
// Arrays tipados no TypeScript.
//
// Para que isso serve?
// Garante a consistência dos dados contidos em uma lista, assegurando que todos os itens pertençam ao mesmo tipo especificado.
//
// Qual comportamento devo observar?
// O compilador autoriza inserções e operações apenas com elementos compatíveis com o tipo definido para a lista.
const listaCidades = ["Curitiba", "Fortaleza", "Manaus"];
listaCidades.push("Florianopolis");
console.log(listaCidades);
