
// O que é?
// Declaração clássica de função usando a palavra-chave function.

// Para que serve?
// Definir blocos de código reutilizáveis com um nome específico.

function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

const mensagem = saudacao("Carlos");
console.log(mensagem);

