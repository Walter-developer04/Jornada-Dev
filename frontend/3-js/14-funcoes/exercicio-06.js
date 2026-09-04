// Exercício 06: arguments object (Objeto arguments)

// 'arguments' é um objeto array-like disponível no corpo de funções tradicionais.
// Ele armazena todos os valores passados como argumentos na chamada da função.
function demonstrarArguments() {
  console.log("Quantidade de argumentos:", arguments.length);
  console.log("Primeiro argumento:", arguments[0]);
  console.log("Segundo argumento:", arguments[1]);

  // 'arguments' se parece com um array (tem índices e length), mas NÃO é um Array real.
  console.log("É uma instância de Array?", Array.isArray(arguments)); // false

  // Em JavaScript moderno, o uso de Parâmetros Rest (...args) é a alternativa preferida.
}

demonstrarArguments("JavaScript", 2026, true);