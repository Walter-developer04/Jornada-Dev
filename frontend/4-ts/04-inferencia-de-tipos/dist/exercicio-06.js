"use strict";
/**
 * exercicio 06 — inferencia em tipos literais de template
 * demonstra como inferir partes de strings usando template literal types.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mensagem = "ola mundo"; // ok
const outra = "ola typescript"; // ok
const rotaUsuario = "/usuarios/123"; // ok
const rotaPublicacao = "/publicacoes/abc"; // ok
const onClick = "onClick"; // ok
const onKeyDown = "onKeyDown"; // ok
const req1 = "get /usuarios"; // ok
const req2 = "post /dados"; // ok
// ===== verificando valores =====
console.log(mensagem);
console.log(outra);
console.log(rotaUsuario);
console.log(rotaPublicacao);
console.log(onClick);
console.log(onKeyDown);
console.log(req1);
console.log(req2);
