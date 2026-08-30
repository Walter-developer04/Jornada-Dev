// EXERCÍCIO 17 — with(): trocar um item em uma cópia (ES2023)

const times = ["Fla", "Cor", "Pal"];

// with(índice, novoValor) devolve uma cópia com o item trocado
const novo = times.with(1, "Cruzeiro");
console.log(novo); // [ 'Fla', 'Cruzeiro', 'Pal' ]

// O original continua igual
console.log(times); // [ 'Fla', 'Cor', 'Pal' ]

// Índice negativo também funciona
const outro = times.with(-1, "Vasco");
console.log(outro); // [ 'Fla', 'Cor', 'Vasco' ]
