// EXERCÍCIO 37 — Valores fora do intervalo: volta (wrap) ou trava (clamp)

// Uint8Array vai de 0 a 255: valores grandes "dão a volta"
const u8 = new Uint8Array(1);
u8[0] = 300;
console.log(u8[0]); // 44 (300 - 256)

// Int8Array vai de -128 a 127
const i8 = new Int8Array(1);
i8[0] = 200;
console.log(i8[0]); // -56

// Uint8ClampedArray não dá a volta: trava no limite
const c8 = new Uint8ClampedArray(1);
c8[0] = 300;
console.log(c8[0]); // 255
c8[0] = -10;
console.log(c8[0]); // 0

// Parte decimal: TypedArrays de inteiros truncam
i8[0] = 3.9;
console.log(i8[0]); // 3
// (Uint8ClampedArray arredonda: 3.9 vira 4)
