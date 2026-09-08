
// O que é?
// Funções que usam parâmetros de tipo (geralmente <T>) para preservar o tipo da entrada.

// Para que serve?
// Criar componentes reutilizáveis que funcionam com vários tipos de dados.

function identificar<T>(valor: T): T {
  return valor;
}

console.log(identificar<string>("Texto"));
console.log(identificar<number>(42));

