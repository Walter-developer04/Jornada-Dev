// Exercício 07: Scope & Function Stack (Escopo e Pilha de Funções)

// Cada chamada de função cria um contexto de execução com seu próprio escopo.
// A Call Stack (Pilha de Chamadas) organiza a execução no modelo LIFO (Last In, First Out).

function terceira() {
  const escopoTerceira = "Valor exclusivo de terceira";
  console.log("3. Entrou em 'terceira' (topo da pilha)");
  console.log("   Escopo local acessado:", escopoTerceira);
  console.log("3. Finalizou 'terceira' e foi desempilhada");
}

function segunda() {
  console.log("2. Entrou em 'segunda' (empilhada)");
  terceira(); // Pausa 'segunda' e coloca 'terceira' no topo da pilha
  console.log("2. Retornou para 'segunda' e agora finaliza");
}

function primeira() {
  console.log("1. Entrou em 'primeira' (empilhada)");
  segunda(); // Pausa 'primeira' e coloca 'segunda' no topo da pilha
  console.log("1. Retornou para 'primeira' e agora finaliza");
}

// Inicia o fluxo de empilhamento:
primeira();