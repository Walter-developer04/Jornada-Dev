// Set é uma coleção que armazena apenas valores únicos.
// Se adicionar o mesmo valor mais de uma vez, ele ignora a duplicata.
const numeros = new Set();

numeros.add(10);
numeros.add(20);
numeros.add(10); // 10 já existe, então não é adicionado novamente.

console.log(numeros); // Set(2) {10, 20}

// Map é uma coleção que armazena pares de chave e valor.
// Funciona de forma semelhante a um objeto, mas aceita qualquer tipo como chave.
const pessoas = new Map();

pessoas.set("nome", "Lucas");
pessoas.set("idade", 21);

// .get() retorna o valor correspondente à chave informada.
console.log(pessoas.get("nome"));   // "Lucas"
console.log(pessoas.get("idade"));  // 21

// Resumindo:
// Set   = coleção de valores únicos. Não permite duplicatas.
// Map   = coleção de pares chave-valor. Usa .set() para adicionar e .get() para acessar.