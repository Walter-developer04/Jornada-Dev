// EXERCÍCIO 14 — splice() e toSpliced(): mexer em qualquer posição

// splice(início, remover, ...adicionar) MUTA o array
const letras = ["a", "b", "c", "d", "e"];

const removidos = letras.splice(1, 2, "X"); // troca b e c por X
console.log(removidos); // [ 'b', 'c' ]
console.log(letras); // [ 'a', 'X', 'd', 'e' ]

// Só inserir (remover 0)
letras.splice(2, 0, "Y");
console.log(letras); // [ 'a', 'X', 'Y', 'd', 'e' ]

// Só remover
letras.splice(0, 1);
console.log(letras); // [ 'X', 'Y', 'd', 'e' ]

// toSpliced() (ES2023): igual, mas devolve cópia sem mutar
const original = [1, 2, 3, 4];
const copia = original.toSpliced(1, 1, 99);
console.log(original); // [ 1, 2, 3, 4 ]
console.log(copia); // [ 1, 99, 3, 4 ]
