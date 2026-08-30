// EXERCÍCIO 15 — slice(): copiar um pedaço (não muta)

const dias = ["seg", "ter", "qua", "qui", "sex"];

// slice(início, fim): o fim NÃO entra
console.log(dias.slice(1, 3)); // [ 'ter', 'qua' ]

// Sem o fim: vai até o final
console.log(dias.slice(2)); // [ 'qua', 'qui', 'sex' ]

// Índices negativos contam de trás para frente
console.log(dias.slice(-2)); // [ 'qui', 'sex' ]

// Sem argumentos: cópia rasa do array inteiro
const copia = dias.slice();
console.log(copia); // [ 'seg', 'ter', 'qua', 'qui', 'sex' ]

// O original nunca muda
console.log(dias.length); // 5
