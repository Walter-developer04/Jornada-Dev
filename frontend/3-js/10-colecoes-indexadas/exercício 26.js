// EXERCÍCIO 26 — some() e every(): testes com função

const notas = [7, 9, 5, 10];

// some(): PELO MENOS UM item passa no teste?
console.log(notas.some((n) => n < 6)); // true (tem o 5)

// every(): TODOS os itens passam?
console.log(notas.every((n) => n >= 5)); // true
console.log(notas.every((n) => n >= 7)); // false

// Caso curioso do array vazio
console.log([].some((n) => n > 0)); // false
console.log([].every((n) => n > 0)); // true
