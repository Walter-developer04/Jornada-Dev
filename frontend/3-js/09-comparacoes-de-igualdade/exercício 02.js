// === é a igualdade estrita: tipos diferentes nunca são iguais
let numero = 10;
let texto = "10";

console.log(numero === texto); // false, não tem conversão
console.log(numero === 10); // true

console.log(null === undefined); // false

// NaN não é igual a nada, nem a ele mesmo
console.log(NaN === NaN); // false