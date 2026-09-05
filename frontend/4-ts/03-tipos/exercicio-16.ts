// O tipo "Tuple" (tupla) no TypeScript.
//
// Para que isso serve?
// Define um array com quantidade fixa de elementos, no qual cada posição possui um tipo pré-determinado e conhecido.
//
// Qual comportamento devo observar?
// A ordem posicional é rigorosamente validada pelo compilador: o primeiro elemento deve ser string e o segundo deve ser número.

const itemCatalogo: [string, number] = ["Monitor Ultrawide", 1850];

const nomeProduto: string = itemCatalogo[0];
const valorProduto: number = itemCatalogo[1];

console.log(`Item: ${nomeProduto} - Preco: R$ ${valorProduto}`);
