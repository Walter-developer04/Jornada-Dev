// SameValueZero é o que o .includes() usa pra procurar num array
// é parecido com ===, mas considera NaN igual a NaN
let notas = [7, NaN, 10];

console.log(notas.includes(10)); // true
console.log(notas.includes(NaN)); // true

// o indexOf usa ===, então ele não acha o NaN
console.log(notas.indexOf(NaN)); // -1

// e pra ele, 0 e -0 são a mesma coisa
console.log([0].includes(-0)); // true
