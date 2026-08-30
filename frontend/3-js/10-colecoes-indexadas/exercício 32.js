// EXERCÍCIO 32 — join(), toString() e toLocaleString()

const frutas = ["maçã", "banana", "uva"];

// join(separador): junta tudo em uma string
console.log(frutas.join()); // 'maçã,banana,uva'
console.log(frutas.join(" - ")); // 'maçã - banana - uva'
console.log(frutas.join("")); // 'maçãbananauva'

// toString(): o mesmo que join(",")
console.log(frutas.toString()); // 'maçã,banana,uva'

// toLocaleString(): usa o formato da localidade
const numeros = [1234.5, 6789.1];
console.log(numeros.toLocaleString("pt-BR")); // formato brasileiro
