// Exercício 05: IIFEs (Immediately Invoked Function Expressions)

// Uma IIFE é uma expressão de função invocada imediatamente após a sua definição.
// Não é uma palavra-chave, mas um padrão de projeto viabilizado pelo operador '()'.

(function () {
  // 1 e 2. A função entre parênteses é tratada como uma EXPRESSÃO.
  const mensagem = "Código executado imediatamente e isolado do escopo global!";
  console.log(mensagem);
})(); // 3. Os parênteses finais realizam a execução imediata.

// IIFE recebendo argumentos no momento da invocação:
(function (ambiente) {
  console.log("Ambiente configurado:", ambiente);
})("produção");