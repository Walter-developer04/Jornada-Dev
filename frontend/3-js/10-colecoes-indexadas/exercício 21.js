// EXERCÍCIO 21 — copyWithin(): copiar trecho para dentro do array (muta)

// copyWithin(destino, inícioDaCópia)
const a = [1, 2, 3, 4, 5];
a.copyWithin(0, 3); // copia [4, 5] para a posição 0
console.log(a); // [ 4, 5, 3, 4, 5 ]

// copyWithin(destino, início, fim): o fim não entra
const b = [1, 2, 3, 4, 5];
b.copyWithin(1, 3, 5); // copia [4, 5] para a posição 1
console.log(b); // [ 1, 4, 5, 4, 5 ]
