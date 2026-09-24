// Record<K, T> cria um tipo de objeto com chaves do tipo K e valores do tipo T.
// O primeiro argumento e o tipo das chaves; o segundo, o tipo dos valores.

type Categoria = "eletronicos" | "roupas" | "livros";

// Para cada categoria, esperamos uma lista de strings com os produtos.
type ProdutosPorCategoria = Record<Categoria, string[]>;

const catalogo: ProdutosPorCategoria = {
    eletronicos: ["Notebook", "Mouse"],
    roupas: ["Camiseta", "Calca"],
    livros: ["TypeScript", "JavaScript"],
};

console.log(catalogo.livros);
// [ 'TypeScript', 'JavaScript' ]