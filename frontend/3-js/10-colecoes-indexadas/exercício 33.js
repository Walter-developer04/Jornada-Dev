// EXERCÍCIO 33 — TypedArrays: arrays de números com tipo fixo

// Cada TypedArray guarda um único tipo de número
const int16 = new Int16Array([10, 20, 30]);
console.log(int16); // Int16Array(3) [ 10, 20, 30 ]

// Acesso e length funcionam como em array comum
console.log(int16[0]); // 10
console.log(int16.length); // 3

// Criar com tamanho: começa tudo zerado
const bytes = new Uint8Array(4);
console.log(bytes); // Uint8Array(4) [ 0, 0, 0, 0 ]

// Principais tipos (o número é o tamanho em bits):
// Int8Array, Uint8Array, Uint8ClampedArray
// Int16Array, Uint16Array
// Int32Array, Uint32Array
// BigInt64Array, BigUint64Array (guardam BigInt)
// Float32Array, Float64Array (Float16Array é adição recente)
