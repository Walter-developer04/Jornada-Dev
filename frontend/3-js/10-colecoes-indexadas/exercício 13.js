// EXERCÍCIO 13 — shift(): remover do início

const fila = ["Ana", "Bruno", "Carla"];

// Remove o primeiro item e devolve ele
const atendido = fila.shift();
console.log(atendido); // 'Ana'
console.log(fila); // [ 'Bruno', 'Carla' ]

// Em array vazio devolve undefined
console.log([].shift()); // undefined
