"use strict";
// O que é?
// O tipo 'any' é compatível com quase todos os tipos (exceto 'never').
// Ele pode receber qualquer valor e pode ser atribuído a qualquer variável.
let a = 10;
let num = a;
let str = a;
// OK em todas as direções, sacrificando a segurança de tipos.
a = "texto";
a = true;
