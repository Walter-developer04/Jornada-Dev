// O tipo primitivo "string" no TypeScript.
//
// Para que isso serve?
// Representa dados textuais delimitados por aspas simples, aspas duplas ou crases (template strings).
//
// Qual comportamento devo observar?
// O sistema de tipos garante a aplicação válida de operações e métodos de manipulação de texto.

const nomeColaborador: string = "Luciana Ramos";
const mensagemBoasVindas: string = `Ola, ${nomeColaborador}! Bem-vinda a equipe.`;

console.log(mensagemBoasVindas);
