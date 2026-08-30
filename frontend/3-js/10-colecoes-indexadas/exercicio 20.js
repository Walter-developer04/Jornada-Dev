// EXERCÍCIO 20 — fill(): preencher com um valor (muta)

// Preenche tudo
const a = [0, 0, 0, 0, 0];
a.fill(7);
console.log(a); // [ 7, 7, 7, 7, 7 ]

// fill(valor, início)
const b = [0, 0, 0, 0, 0];
b.fill(9, 2);
console.log(b); // [ 0, 0, 9, 9, 9 ]

// fill(valor, início, fim): o fim não entra
const c = [0, 0, 0, 0, 0];
c.fill(5, 1, 3);
console.log(c); // [ 0, 5, 5, 0, 0 ]
