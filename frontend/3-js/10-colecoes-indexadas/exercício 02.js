// EXERCÍCIO 02 — Acessar e modificar itens pelo índice

const cores = ["azul", "verde", "vermelho"];

// O índice começa em 0
console.log(cores[0]); // azul
console.log(cores[2]); // vermelho

// Índice fora dos limites devolve undefined (não dá erro)
console.log(cores[10]); // undefined

// Modifica um item existente
cores[1] = "roxo";
console.log(cores); // [ 'azul', 'roxo', 'vermelho' ]

// Atribuir depois do fim aumenta o array
cores[3] = "amarelo";
console.log(cores.length); // 4

// Colchetes NÃO aceitam índice negativo
console.log(cores[-1]); // undefined
