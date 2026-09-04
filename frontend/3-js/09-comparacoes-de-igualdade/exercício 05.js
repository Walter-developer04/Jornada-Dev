// isStrictlyEqual é o algoritmo do ===: mesmo tipo e mesmo valor
console.log(7 === 7); // true
console.log(7 === "7"); // false

// com arrays e objetos, ele compara a referência, não o conteúdo
let a = [1, 2];
let b = [1, 2];
console.log(a === b); // false, são dois arrays diferentes na memória

let c = a;
console.log(a === c); // true, c aponta pro mesmo array
