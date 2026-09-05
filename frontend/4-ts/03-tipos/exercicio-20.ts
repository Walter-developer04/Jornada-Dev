// O "bottom type" "never" no TypeScript.
//
// Para que isso serve?
// Representa situações e valores que nunca chegam a ocorrer, sendo comum como tipo de retorno de funções que sempre disparam exceções ou interrompem o fluxo normal.
//
// Qual comportamento devo observar?
// Como a função encerra o fluxo disparando um erro imediatamente, o compilador compreende que ela nunca produzirá um retorno válido com valor.

function interromperComFalha(mensagemErro: string): never {
  throw new Error(mensagemErro);
}

// A chamada abaixo dispara um erro e nunca produz um retorno regular:
interromperComFalha("Erro critico de integridade do sistema.");
