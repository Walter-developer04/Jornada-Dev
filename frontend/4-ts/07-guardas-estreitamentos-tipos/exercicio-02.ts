// O que é?
// typeof pode retornar um conjunto específico de strings em JavaScript.

// Valores possíveis:
// "string", "number", "bigint", "boolean", "symbol", "undefined", "object", "function"

// Para que serve?
// Cada valor permite ao TypeScript refinar o tipo da variável naquele branch.

function verificarTipo(valor: string | number | boolean | symbol) {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase());
  } else if (typeof valor === "number") {
    console.log(valor.toFixed(2));
  } else if (typeof valor === "boolean") {
    console.log(!valor);
  } else if (typeof valor === "symbol") {
    console.log(valor.toString());
  }
}

verificarTipo("hello");
verificarTipo(42);
verificarTipo(true);
verificarTipo(Symbol("id"));
