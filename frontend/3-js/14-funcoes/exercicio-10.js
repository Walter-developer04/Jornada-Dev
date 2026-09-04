// Exercício 10: Closures

// Uma closure ocorre quando uma função interna retém a referência ao seu escopo léxico,
// mesmo após a função externa ter concluído sua execução e saído da pilha de chamadas.

function criarContador() {
  let contagem = 0; // Variável pertencente ao escopo de 'criarContador'

  return function () {
    // A função retornada mantém o acesso à variável 'contagem'.
    contagem += 1;
    return contagem;
  };
}

// 'criarContador' termina sua execução, mas a closure mantém 'contagem' viva na memória:
const meuContador = criarContador();

console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3