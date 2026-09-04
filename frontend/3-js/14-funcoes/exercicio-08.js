// Exercício 08: Recursion (Recursão)

// Uma função recursiva é aquela que chama a si mesma para resolver frações de um problema.
function contagemRegressiva(numero) {
  // CONDIÇÃO DE PARADA (caso base):
  // Impede que as chamadas continuem infinitamente, evitando o estouro da pilha (Stack Overflow).
  if (numero <= 0) {
    console.log("Fim da contagem!");
    return; // Encerra o fluxo da recursão
  }

  console.log(numero);

  // CHAMADA RECURSIVA: invoca a própria função com um valor que avança rumo à condição de parada.
  contagemRegressiva(numero - 1);
}

contagemRegressiva(3);