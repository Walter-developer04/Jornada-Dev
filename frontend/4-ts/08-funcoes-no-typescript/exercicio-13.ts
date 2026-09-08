
// O que é?
// Desestruturar objetos ou arrays diretamente na assinatura da função.

// Para que serve?
// Acessar propriedades de objetos passados como argumento de forma limpa.

type Produto = { nome: string; preco: number };

function exibirPreco({ nome, preco }: Produto): void {
  console.log(`O ${nome} custa R$ ${preco}`);
}

exibirPreco({ nome: "Teclado", preco: 150 });

