"use strict";
// O tipo primitivo "undefined" no TypeScript.
//
// Para que isso serve?
// Representa a ausência de atribuição de valor a uma variável declarada.
//
// Qual comportamento devo observar?
// Uma variável anotada formalmente como "undefined" aceita estritamente o valor primitivo "undefined".
let retornoConsulta = undefined;
console.log(retornoConsulta);
