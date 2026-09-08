"use strict";
// O que é?
// Quando uma função tem sobrecargas (overloads), cada assinatura do destino 
// deve ter uma correspondente compatível na origem.
// A origem pode ter assinaturas extras.
let source = {};
let target;
// OK: 'source' possui todas as assinaturas exigidas por 'target'.
target = source;
