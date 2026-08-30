// EXERCÍCIO 12 — unshift(): adicionar no início

const fila = ["Bruno", "Carla"];

// Devolve o novo length
const tamanho = fila.unshift("Ana");
console.log(tamanho); // 3
console.log(fila); // [ 'Ana', 'Bruno', 'Carla' ]

// Vários de uma vez entram na ordem passada
fila.unshift("Zeca", "Duda");
console.log(fila);
// [ 'Zeca', 'Duda', 'Ana', 'Bruno', 'Carla' ]
