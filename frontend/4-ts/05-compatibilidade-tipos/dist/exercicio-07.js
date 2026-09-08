"use strict";
// O que é?
// Parâmetros opcionais e obrigatórios são intercambiáveis na verificação de compatibilidade.
// Parâmetros opcionais extras na origem ou no destino não geram erro.
let fn1 = (a, b) => { };
let fn2 = (a) => { };
// OK: 'fn2' não usa o segundo parâmetro, o que é aceitável.
fn1 = fn2;
// OK: 'fn1' trata o segundo parâmetro como opcional, logo pode receber 'fn2'.
fn2 = fn1;
