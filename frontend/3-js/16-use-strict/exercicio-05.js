// Exercício 05: Restrições em arguments e eval

"use strict";

// ERRO EM STRICT MODE: Não é possível definir arguments como variável
// Descomente a linha abaixo para ver o erro
// const arguments = [1, 2, 3]; // SyntaxError

// ERRO EM STRICT MODE: Não é possível usar eval como identificador
// Descomente a linha abaixo para ver o erro
// const eval = "alguma valor"; // SyntaxError

//  ERRO EM STRICT MODE: Não é possível usar arguments como parâmetro
// Descomente a função abaixo para ver o erro
// function funcaoInvalida(...arguments) {
//   return arguments;
// }

//  MODO CORRETO: Nomes alternativos
function funcaoValida(...args) {
  return args;
}

// Teste
console.log("funcaoValida:", funcaoValida(1, 2, 3));

// Exemplo com eval (funciona em strict mode, mas com limitações)
try {
  const resultado = eval("1 + 1");
  console.log("Resultado do eval:", resultado);
} catch (erro) {
  console.error("Erro no eval:", erro.message);
}
