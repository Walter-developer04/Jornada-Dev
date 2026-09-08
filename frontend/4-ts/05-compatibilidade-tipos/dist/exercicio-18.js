"use strict";
// O que é?
// O tipo 'void' representa a ausência de retorno.
// Ele não é atribuível à maioria dos tipos, nem recebe a maioria dos tipos.
let v = undefined;
let a = v;
let u = v;
// OK: 'void' aceita 'undefined' (e 'null' se strictNullChecks estiver desligado).
// Erro esperado: 'void' não pode ser atribuído a 'number'.
// let num: number = v;
