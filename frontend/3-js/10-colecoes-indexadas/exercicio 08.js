// EXERCÍCIO 08 — Array.of(): criar array a partir dos argumentos

// Um único número vira um item (diferente do new Array!)
console.log(Array.of(3)); // [ 3 ]
console.log(new Array(3).length); // 3 (array vazio!)

// Vários argumentos viram itens na ordem
console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]

// Aceita qualquer valor
console.log(Array.of("a", true, null)); // [ 'a', true, null ]
