// 1. O que é:
// Iteradores e geradores sao mecanismos do JavaScript para percorrer colecoes de dados
// de forma controlada, elemento por elemento, pausando e retomando o processamento.

// 2. Para que serve:
// Servem para navegar por sequencias de valores sob demanda, economizando memoria
// e permitindo criar estruturas de dados personalizadas que funcionam com laços nativos.

// 3. Como usar:
// Consuma estruturas iteraveis com for...of ou next(), e crie sequencias usando objetos
// com Symbol.iterator ou definindo funcoes geradoras com function*.

// 4. Quando usar:
// Use quando precisar percorrer dados passo a passo, criar colecoes personalizadas
// ou lidar com fluxos de valores calculados sob demanda.

// 5. Quando NÃO usar:
// Nao use quando um loop tradicional ou metodos de array como map ou forEach
// resolverem a tarefa com mais simplicidade e sem ganho de sob demanda.

// 6. Sintaxe:
// const iterador = { next() { return { value: 1, done: false }; } };
// function* meuGerador() { yield 'valor'; }

// Exemplo 1: Iterador manual simples de cores de tema
const iteradorCores = {
  cores: ['azul', 'verde', 'roxo'],
  indice: 0,
  next() {
    if (this.indice < this.cores.length) {
      const valor = this.cores[this.indice];
      this.indice += 1;
      return { value: valor, done: false };
    }
    return { value: undefined, done: true };
  }
};

console.log(iteradorCores.next()); // { value: 'azul', done: false }
console.log(iteradorCores.next()); // { value: 'verde', done: false }
console.log(iteradorCores.next()); // { value: 'roxo', done: false }
console.log(iteradorCores.next()); // { value: undefined, done: true }

// Exemplo 2: Gerador simples para etapas de um formulario
function* gerarEtapasFormulario() {
  yield 'Dados Pessoais';
  yield 'Endereco';
  yield 'Confirmacao';
}

const fluxoEtapas = gerarEtapasFormulario();

console.log(fluxoEtapas.next()); // { value: 'Dados Pessoais', done: false }
console.log(fluxoEtapas.next()); // { value: 'Endereco', done: false }
console.log(fluxoEtapas.next()); // { value: 'Confirmacao', done: false }
console.log(fluxoEtapas.next()); // { value: undefined, done: true }
