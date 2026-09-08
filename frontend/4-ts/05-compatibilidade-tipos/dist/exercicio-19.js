"use strict";
// O que é?
// Com 'strictNullChecks' ativado, 'null' e 'undefined' só são atribuíveis
// a eles mesmos, a 'void' (apenas undefined) e aos tipos 'any' e 'unknown'.
let n = null;
let u = undefined;
let a = n;
let unk = u;
let v = undefined;
// Erro esperado com strictNullChecks ativado:
// O tipo 'undefined' não é atribuível ao tipo 'number'.
// let num: number = u;
