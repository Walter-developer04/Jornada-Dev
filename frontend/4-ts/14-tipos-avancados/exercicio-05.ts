// Assunto: Recursive Types
// Um tipo recursivo referencia a si mesmo, permitindo estruturas
// com profundidade desconhecida, como uma arvore de nos.

// 1. O tipo NoArvore aparece dentro da propria definicao:
// cada no possui filhos que tambem sao do tipo NoArvore.
type NoArvore = {
  valor: string;
  filhos: NoArvore[];
};

// 2. Exemplo de utilizacao: uma arvore pequena e legivel.
const arvore: NoArvore = {
  valor: "raiz",
  filhos: [
    {
      valor: "primeiro filho",
      filhos: [],
    },
    {
      valor: "segundo filho",
      filhos: [
        {
          valor: "neto",
          filhos: [],
        },
      ],
    },
  ],
};

// 3. Demonstracao do resultado: percorre a arvore em profundidade.
// A funcao tambem e recursiva: ela chama a si mesma para cada filho encontrado.
function exibirArvore(no: NoArvore, nivel: number): void {
  const recuo = "  ".repeat(nivel);
  console.log(recuo + no.valor);
  no.filhos.forEach((filho: NoArvore): void => {
    exibirArvore(filho, nivel + 1);
  });
}

exibirArvore(arvore, 0);
