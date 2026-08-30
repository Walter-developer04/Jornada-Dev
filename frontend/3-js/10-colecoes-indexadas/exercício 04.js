// EXERCÍCIO 04 — Arrays esparsos (com "buracos")

// Um buraco é uma posição que simplesmente não existe
const esparso = [1, , 3];
console.log(esparso.length); // 3
console.log(esparso[1]); // undefined

// new Array(n) também cria array esparso
const vazio = new Array(4);
console.log(vazio.length); // 4

// delete remove o valor, mas deixa o buraco
const letras = ["a", "b", "c"];
delete letras[1];
console.log(letras); // [ 'a', <1 empty item>, 'c' ]
console.log(letras.length); // 3 (não diminuiu)

// Evite esparsos: prefira remover com filter()
const limpo = ["a", "b", "c"].filter((l) => l !== "b");
console.log(limpo); // [ 'a', 'c' ]
