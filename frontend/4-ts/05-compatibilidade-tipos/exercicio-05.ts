// O que é?
// O tipo de retorno da função de origem deve ser compatível com o tipo de retorno do destino.
// A função de origem pode retornar mais propriedades do que o destino exige.

let x = () => ({ name: "Alice" });
let y = () => ({ name: "Alice", location: "Seattle" });

// OK: 'y' retorna um objeto que possui todas as propriedades que 'x' exige.
x = y;

// Erro esperado: 'x' não retorna a propriedade 'location' exigida por 'y'.
// y = x;
