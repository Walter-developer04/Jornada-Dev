// O que é?
// Se um tipo genérico não usa o parâmetro de tipo em seus membros,
// o argumento genérico não afeta a compatibilidade estrutural.

interface Empty<T> {}

let x: Empty<number>;
let y: Empty<string>;

// OK: A estrutura resultante de ambos é idêntica (vazia).
x = y;
