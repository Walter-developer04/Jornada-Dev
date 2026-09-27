// Namespace Augmentation: redeclarar um namespace para adicionar membros
// O TypeScript funde as declaracoes (declaration merging)

// Declaracao original
namespace Loja {
    export interface Produto {
        nome: string;
        preco: number;
    }
}

// Segunda declaracao do mesmo namespace: ampliacao
namespace Loja {
    // Pode usar o tipo declarado no bloco anterior (merge)
    export function exibirProduto(produto: Produto): string {
        return produto.nome + " custa " + produto.preco;
    }
}

// Estrutura ampliada: um unico namespace com Produto e exibirProduto
const item: Loja.Produto = { nome: "Caderno", preco: 15 };
console.log(Loja.exibirProduto(item)); // Caderno custa 15