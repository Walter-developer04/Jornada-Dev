// EXERCÍCIO 01 — O objeto Array: criando arrays

// Forma mais comum: literal com colchetes
const frutas = ["maçã", "banana", "uva"];
console.log(frutas);

// Também dá para criar com o construtor Array
const numeros = new Array(10, 20, 30);
console.log(numeros);

// CUIDADO: um único argumento numérico cria um array VAZIO desse tamanho
const estranho = new Array(3);
console.log(estranho.length); // 3 (sem itens dentro)

// Array vazio
const vazio = [];
console.log(vazio.length); // 0

// Pode guardar tipos diferentes no mesmo array
const mistura = [1, "texto", true, null];
console.log(mistura);
