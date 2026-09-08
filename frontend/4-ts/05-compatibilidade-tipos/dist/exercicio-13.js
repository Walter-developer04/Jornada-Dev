"use strict";
// O que é?
// Se um tipo genérico não usa o parâmetro de tipo em seus membros,
// o argumento genérico não afeta a compatibilidade estrutural.
let x;
let y;
// OK: A estrutura resultante de ambos é idêntica (vazia).
x = y;
