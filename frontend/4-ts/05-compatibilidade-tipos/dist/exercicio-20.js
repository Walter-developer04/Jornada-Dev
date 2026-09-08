"use strict";
// O que é?
// 'never' é o tipo "inferior" (bottom type). Nada pode ser atribuído a ele (exceto ele mesmo).
// Porém, 'never' pode ser atribuído a qualquer outro tipo.
let n = {};
let num = n;
let str = n;
// OK: 'never' é compatível com tudo na atribuição (útil em guardas de tipo e exaustividade).
// Erro esperado: Nenhum tipo normal pode ser atribuído a 'never'.
// n = 10;
