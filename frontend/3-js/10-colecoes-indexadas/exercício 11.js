// EXERCÍCIO 11 — pop(): remover do fim

const pilha = ["a", "b", "c"];

// Remove o último item e devolve ele
const removido = pilha.pop();
console.log(removido); // 'c'
console.log(pilha); // [ 'a', 'b' ]

// Em array vazio devolve undefined
console.log([].pop()); // undefined
