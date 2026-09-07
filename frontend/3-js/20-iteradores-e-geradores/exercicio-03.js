// 1. O que é:
// O protocolo iteravel define que um objeto deve implementar uma funcao na propriedade
// [Symbol.iterator], que deve retornar um objeto em conformidade com o protocolo iterador.

// 2. Para que serve:
// Serve para permitir que objetos customizados sejam reconhecidos pela linguagem como
// estruturas perceptiveis por for...of, operador spread e desestruturacao.

// 3. Como usar:
// Adicione a chave [Symbol.iterator]() ao seu objeto ou classe, retornando um objeto
// que contenha o metodo next() com { value, done }.

// 4. Quando usar:
// Use ao criar estruturas de dados personalizadas (como listas ou filas) que
// outros desenvolvedores precisarao percorrer utilizando laços nativos.

// 5. Quando NÃO usar:
// Nao use em objetos que sao apenas dicionarios de configuracao chave-valor,
// onde Object.keys() ou Object.entries() ja atendem perfeitamente.

// Objeto iteravel representando uma fila de notificacoes no front-end
const filaNotificacoes = {
  itens: ['Nova mensagem', 'Alerta de seguranca', 'Atualizacao disponivel'],

  [Symbol.iterator]() {
    let indice = 0;
    const lista = this.itens;

    return {
      next() {
        if (indice < lista.length) {
          const valor = lista[indice];
          indice += 1;
          return { value: valor, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

// Consumindo o objeto iteravel manualmente via iterador
const iterador = filaNotificacoes[Symbol.iterator]();

console.log(iterador.next()); // { value: 'Nova mensagem', done: false }
console.log(iterador.next()); // { value: 'Alerta de seguranca', done: false }
console.log(iterador.next()); // { value: 'Atualizacao disponivel', done: false }
console.log(iterador.next()); // { value: undefined, done: true }
