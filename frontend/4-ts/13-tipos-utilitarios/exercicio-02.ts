// Pick<T, K> seleciona apenas as propriedades informadas de T.
// O segundo argumento recebe as chaves que devem ser mantidas no novo tipo.

type Produto = {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
};

// Mantemos somente nome e preco no tipo resultante.
type ProdutoResumo = Pick<Produto, "nome" | "preco">;

const resumo: ProdutoResumo = {
    nome: "Notebook",
    preco: 3500,
};

// Propriedades como id e descricao nao fazem parte deste tipo.
console.log(resumo);
// { nome: 'Notebook', preco: 3500 }