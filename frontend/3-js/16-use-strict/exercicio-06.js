// Exercício 06: Restrições de Sintaxe

"use strict";

// 1. Palavras reservadas para versões futuras do ECMAScript
// Descomente as linhas abaixo para ver os erros
// const implements = "interface"; // SyntaxError
// const package = "private";     // SyntaxError
// const protected = "public";    // SyntaxError
// const static = "yield";        // SyntaxError

// 2. Parâmetros duplicados em funções
// Descomente a função abaixo para ver o erro
// function funcaoDuplicada(a, a) {
//   return a;
// }

// 3. Literais numéricos octais
// Descomente a linha abaixo para ver o erro
// const numeroOctal = 071; // SyntaxError

// 4. Caracteres de escape em strings
// Descomente a linha abaixo para ver o erro
// const caractereEscape = "\071"; // SyntaxError

// MODO CORRETO: Usar nomes alternativos
const interfaceImpl = "interface";
const pkg = "private";
const protectedVar = "public";
const staticVar = "yield";

function funcaoSemDuplicata(a, b) {
  return a + b;
}

const numeroDecimal = 71;
const caractereHex = "\x31";

console.log("interfaceImpl:", interfaceImpl);
console.log("pkg:", pkg);
console.log("protectedVar:", protectedVar);
console.log("staticVar:", staticVar);
console.log("funcaoSemDuplicata:", funcaoSemDuplicata(1, 2));
console.log("numeroDecimal:", numeroDecimal);
console.log("caractereHex:", caractereHex);
