// EXERCÍCIO 23 — indexOf() e lastIndexOf(): buscar a posição

const letras = ["a", "b", "a", "c", "a"];

// indexOf: primeiro índice onde o valor aparece
console.log(letras.indexOf("a")); // 0

// lastIndexOf: último índice
console.log(letras.lastIndexOf("a")); // 4

// Não achou? Devolve -1
console.log(letras.indexOf("z")); // -1

// indexOf aceita índice inicial de busca
console.log(letras.indexOf("a", 1)); // 2

// Não encontra NaN (includes encontra)
console.log([NaN].indexOf(NaN)); // -1
