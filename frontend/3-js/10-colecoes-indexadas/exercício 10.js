// EXERCÍCIO 10 — push(): adicionar no fim

const compras = ["pão", "leite"];

// Devolve o novo length
const tamanho = compras.push("café");
console.log(tamanho); // 3
console.log(compras); // [ 'pão', 'leite', 'café' ]

// Adiciona vários de uma vez
compras.push("açúcar", "farinha");
console.log(compras);
// [ 'pão', 'leite', 'café', 'açúcar', 'farinha' ]
