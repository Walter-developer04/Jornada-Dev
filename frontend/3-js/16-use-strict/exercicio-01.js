// O que é "use strict"?
// É uma linha de código que você coloca no começo de um arquivo JavaScript.
// Ela faz o JavaScript ser mais exigente com os erros.
//
// Para que serve?
// Sem essa linha, o JavaScript deixa passar alguns erros sem avisar.
// Por exemplo: se você escrever o nome de uma variável errado,
// o JavaScript cria essa variável no lugar e continua funcionando.
// Isso pode esconder problemas no seu código.
//
// Com "use strict", esses erros aparecem na hora, como mensagens de erro.
// Você descobre o problema antes que ele vire algo pior.
//
// Por que usar?
// Porque ajuda a encontrar erros mais rápido.
// Ajuda a escrever código mais organizado.
// Ajuda a evitar problemas que só aparecem depois, quando o programa já está grande.
//
// Como usar?
// Basta escrever "use strict" entre aspas no início do arquivo, assim:

"use strict";

// Depois disso, tudo que estiver no arquivo segue essas regras mais rígidas.

// Exercício 01: Invocação Básica do Strict Mode

// 1. Strict mode para todo o script
"use strict";

// Esta linha agora está em strict mode
let variavelDeclarada = "Estou declarada corretamente";

// 2. Strict mode dentro de uma função
function minhaFuncaoStrict() {
  "use strict";
  // O código dentro da função está em strict mode
  let interna = "Variável em strict mode";
  return interna;
}

// 3. Comparação com modo não-strict
function modoNaoStrict() {
  // Sem "use strict", operações silenciosas podem ocorrer
  try {
    variavelNaoDeclarada = "Isso cria uma variável global!";
    return "Modo não-strict funcionou";
  } catch (error) {
    return ` ERRO CAPTURADO: ${error.message}`;
  }
}

// Teste os comportamentos
console.log(variavelDeclarada);
console.log(minhaFuncaoStrict());
console.log(modoNaoStrict());

// Nota: Em Node.js, use global ao invés de window
console.log(typeof globalThis.variavelNaoDeclarada);
