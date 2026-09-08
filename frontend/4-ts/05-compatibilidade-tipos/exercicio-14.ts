// O que é?
// Quando o tipo genérico utiliza o parâmetro em seus membros,
// os argumentos fornecidos são comparados rigorosamente.

interface NotEmpty<T> {
  data: T;
}

let x: NotEmpty<number>;
let y: NotEmpty<string>;

// Erro esperado:
// 'number' e 'string' são incompatíveis, logo os tipos genéricos resultantes também são.
// x = y;
