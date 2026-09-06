// Exercício 02: Variáveis Não Declaradas

"use strict";

// ERRO EM STRICT MODE: Atribuição a variável não declarada
try {
  variavelNaoDeclarada = "Tentando criar variável global";
} catch (erro) {
  console.error("Erro capturado:", erro.name);
  console.error("Mensagem:", erro.message);
}

// MODO CORRETO: Primeiro declarar
let variavelCorreta = "Declarada corretamente";
const constanteCorreta = "Também declarada";

// Comparação com modo não-strict (comente o "use strict" acima para testar)
function modoNaoStrict() {
  variavelNaoDeclarada = "Isso cria uma variável global!";
  return "Funciona no modo não-strict, mas é uma prática ruim";
}

// Verificação de segurança
console.log("typeof variavelCorreta:", typeof variavelCorreta);
console.log("typeof constanteCorreta:", typeof constanteCorreta);

// Teste da função não-strict
console.log(modoNaoStrict());
