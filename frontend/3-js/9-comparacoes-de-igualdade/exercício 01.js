// == é a igualdade solta: se os tipos forem diferentes, ele converte antes de comparar
let numero = 10;
let texto = "10";

console.log(numero == texto); // true, o "10" vira número

console.log(0 == ""); // true, string vazia vira 0
console.log(null == undefined); // true, os dois são considerados iguais aqui

// se os tipos já forem iguais, é uma comparação normal
console.log(5 == 5);
