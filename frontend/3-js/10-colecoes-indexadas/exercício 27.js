// EXERCÍCIO 27 — forEach(): executar para cada item

const frutas = ["maçã", "banana", "uva"];

// A função recebe (valor, índice)
frutas.forEach((fruta, indice) => {
  console.log(indice + " - " + fruta);
});

// forEach não devolve nada (não cria array novo)
const resultado = frutas.forEach((f) => f.toUpperCase());
console.log(resultado); // undefined
