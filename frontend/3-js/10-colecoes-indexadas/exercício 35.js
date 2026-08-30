// EXERCÍCIO 35 — DataView: leitura e escrita byte a byte

const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);

// Grava um inteiro sem sinal de 16 bits no byte 0
view.setUint16(0, 60000);
console.log(view.getUint16(0)); // 60000

// Grava um inteiro sem sinal de 8 bits no byte 2
view.setUint8(2, 255);
console.log(view.getUint8(2)); // 255

// 3º argumento true = little-endian (como x86)
view.setUint16(0, 1, true);
console.log(view.getUint8(0)); // 1
console.log(view.getUint8(1)); // 0

// Também existem getInt8, setInt16, getFloat32, setFloat64 etc.
