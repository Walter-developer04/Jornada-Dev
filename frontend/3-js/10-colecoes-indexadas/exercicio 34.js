// EXERCÍCIO 34 — ArrayBuffer: um bloco de memória em bytes

// Cria 8 bytes zerados
const buffer = new ArrayBuffer(8);
console.log(buffer.byteLength); // 8

// O buffer é a "matéria-prima": não lê nem escreve sozinho
// Quem acessa os bytes são TypedArrays ou DataView

// Um Int16Array enxerga o buffer como números de 2 bytes
const int16 = new Int16Array(buffer);
console.log(int16.length); // 4 (8 bytes / 2)

// Escrever no TypedArray escreve no buffer
int16[0] = 300;
console.log(int16[0]); // 300

// slice() copia parte do buffer
const parte = buffer.slice(0, 4);
console.log(parte.byteLength); // 4
