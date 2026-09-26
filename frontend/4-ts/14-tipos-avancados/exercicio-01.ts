// Assunto: Mapped Types
// Mapped Types criam um novo tipo transformando as propriedades de um tipo existente.
// A sintaxe [P in keyof T] percorre cada propriedade do tipo original.

// 1. Tipo original
interface Produto {
  nome: string;
  preco: number;
  disponivel: boolean;
}

// 2. Transformacao: cada propriedade de Produto vira opcional (?).
type ProdutoParcial = {
  [P in keyof Produto]?: Produto[P];
};

// 3. Transformacao: cada propriedade de Produto vira somente leitura (readonly).
type ProdutoSomenteLeitura = {
  readonly [P in keyof Produto]: Produto[P];
};

// 4. Exemplo de utilizacao
const produto: Produto = {
  nome: "Teclado mecanico",
  preco: 250,
  disponivel: true,
};

// No tipo parcial, todas as propriedades sao opcionais.
const atualizacao: ProdutoParcial = {
  preco: 199,
};

// No tipo somente leitura, os valores nao podem ser alterados depois da criacao.
const catalogo: ProdutoSomenteLeitura = {
  nome: "Monitor",
  preco: 900,
  disponivel: false,
};

// 5. Demonstracao do resultado
console.log("Produto completo:", produto);
console.log("Atualizacao parcial:", atualizacao);
console.log("Produto somente leitura:", catalogo);

// produto.preco = 100;   // funciona: Produto permite alteracao.
// catalogo.preco = 100;  // erro: propriedade readonly no tipo mapeado.
