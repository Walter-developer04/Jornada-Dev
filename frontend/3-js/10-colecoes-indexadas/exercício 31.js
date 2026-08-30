// EXERCÍCIO 31 — reduce() e reduceRight(): reduzir a um valor só

const numeros = [1, 2, 3, 4];

// reduce: (acumulador, item) => novo acumulador
// O 0 é o valor inicial do acumulador
const soma = numeros.reduce((total, n) => total + n, 0);
console.log(soma); // 10

// Outro valor inicial muda o resultado
console.log(numeros.reduce((total, n) => total + n, 100)); // 110

// reduceRight faz o mesmo, mas da direita para a esquerda
const letras = ["a", "b", "c", "d"];
console.log(letras.reduceRight((acc, l) => acc + l, "")); // 'dcba'
