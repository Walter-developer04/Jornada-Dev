// Object.is é mais estrito que o ===
// ele sabe que NaN é igual a NaN, e distingue 0 de -0
console.log(Object.is(10, 10)); // true
console.log(Object.is("js", "js")); // true

console.log(Object.is(NaN, NaN)); // true, diferente do ===
console.log(Object.is(0, -0)); // false, o sinal importa aqui
