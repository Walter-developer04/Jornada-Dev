// EXERCÍCIO 03 — at(): acesso com índice negativo

const letras = ["a", "b", "c", "d"];

// Índice positivo funciona como os colchetes
console.log(letras.at(0)); // 'a'
console.log(letras.at(2)); // 'c'

// Índice negativo conta do fim para o começo
console.log(letras.at(-1)); // 'd'
console.log(letras.at(-2)); // 'c'

// Fora dos limites devolve undefined
console.log(letras.at(10)); // undefined

// Exemplo prático: pegar o último item sem saber o tamanho
const notas = [7, 8, 9, 10];
console.log(notas.at(-1)); // 10
