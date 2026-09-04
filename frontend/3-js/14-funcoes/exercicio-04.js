// Exercício 04: Arrow Functions (Funções de Seta)

// 1. Sintaxe com bloco de instruções e retorno explícito:
const saudar = (nome) => {
  return `Olá, ${nome}!`;
};

// 2. Sintaxe concisa: parâmetro único e retorno implícito (sem chaves e sem return):
const dobrar = n => n * 2;

console.log(saudar("Lucas")); // "Olá, Lucas!"
console.log(dobrar(7)); // 14

// Observação semântica:
// Arrow functions não são apenas um atalho sintático; elas possuem diferenças fundamentais:
// não possuem seu próprio 'this', não possuem 'arguments' próprio e não funcionam com 'new'.