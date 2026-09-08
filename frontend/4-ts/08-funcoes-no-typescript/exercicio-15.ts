
// O que é?
// Indica que a função nunca termina normalmente (lança erro ou entra em loop infinito).

// Para que serve?
// Tipar funções que lançam exceções ou validam condições exaustivas.

function lancarErro(mensagem: string): never {
  throw new Error(mensagem);
}

function validarIdade(idade: number) {
  if (idade < 0) {
    lancarErro("Idade não pode ser negativa.");
  }
}

validarIdade(25);
// validarIdade(-5); // Erro esperado: lançará exceção

