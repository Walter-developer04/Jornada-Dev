// EXERCÍCIO 36 — buffer, byteLength, byteOffset, length, set() e subarray()

// Int16Array começando no byte 2 do buffer
const buffer = new ArrayBuffer(8);
const int16 = new Int16Array(buffer, 2);

// Propriedades de instância exclusivas dos TypedArrays
console.log(int16.byteOffset); // 2
console.log(int16.byteLength); // 6
console.log(int16.length); // 3
console.log(int16.buffer === buffer); // true

// set(): copia valores para dentro, de uma vez
const destino = new Int16Array(4);
destino.set([100, 200], 1); // a partir do índice 1
console.log(destino); // Int16Array(4) [ 0, 100, 200, 0 ]

// subarray(): cria uma VISÃO do mesmo buffer (não copia)
const visao = destino.subarray(1, 3);
visao[0] = 999;
console.log(destino); // [ 0, 999, 200, 0 ] (mudou junto!)
