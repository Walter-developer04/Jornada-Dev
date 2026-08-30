// EXERCÍCIO 24 — find() e findLast(): buscar com função de teste

const numeros = [5, 12, 8, 130, 44];

// find(): devolve o primeiro VALOR que passa no teste
console.log(numeros.find((n) => n > 10)); // 12

// findLast() (ES2023): devolve o último que passa
console.log(numeros.findLast((n) => n > 10)); // 44

// Nada passa? undefined
console.log(numeros.find((n) => n > 1000)); // undefined

// Muito usado com arrays de objetos
const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 30 },
];
const adulto = pessoas.find((p) => p.idade >= 18);
console.log(adulto.nome); // 'Bruno'
