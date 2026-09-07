// 1. O que é:
// Uma funcao geradora e declarada com function* e permite pausar sua execucao
// no operador yield, retornando um objeto gerador que e iterador e iteravel.

// 2. Para que serve:
// Serve para simplificar a criacao de iteradores complexos, gerando valores sob demanda
// sem necessidade de gerenciar o estado interno manualmente com variaveis de indice.

// 3. Como usar:
// Declare function* nome(), insira yield valor onde quiser pausar e retome
// a execucao chamando o metodo next() do gerador resultante.

// 4. Quando usar:
// Use para gerar sequencias de dados sob demanda, IDs sequenciais ou passos
// de um assistente de interface sem consumir memoria com arrays inteiros.

// 5. Quando NÃO usar:
// Nao use para calculos simples onde um array estatico ou funcao comum resolva
// de forma imediata e sem complexidade de pausamento.

// Gerador de identificadores unicos para componentes de interface
function* gerarIdsComponentes(prefixo) {
  let contador = 1;
  while (contador <= 3) {
    yield prefixo + '-' + contador;
    contador += 1;
  }
}

// Criando a instancia do gerador
const geradorBotoes = gerarIdsComponentes('btn');

console.log(geradorBotoes.next()); // { value: 'btn-1', done: false }
console.log(geradorBotoes.next()); // { value: 'btn-2', done: false }
console.log(geradorBotoes.next()); // { value: 'btn-3', done: false }
console.log(geradorBotoes.next()); // { value: undefined, done: true }

// Geradores tambem sao iteraveis e podem ser usados com for...of
function* listarCoresAlerta() {
  yield 'amarelo';
  yield 'laranja';
  yield 'vermelho';
}

for (const cor of listarCoresAlerta()) {
  console.log('Nivel de alerta:', cor);
}
