// 1. O que é:
// O laço for...of e uma estrutura de repeticao nativa criada para percorrer
// automaticamente qualquer objeto que implemente o protocolo iteravel.

// 2. Para que serve:
// Serve para extrair sequencialmente os valores de arrays, strings e colecoes customizadas,
// cuidando da chamada do metodo next() e da condicao de parada internamente.

// 3. Como usar:
// Escreva for (const elemento of iteravel) { ... } para processar cada valor
// produzido ate que done seja verdadeiro.

// 4. Quando usar:
// Use sempre que precisar percorrer os valores de uma colecao iteravel do inicio ao fim,
// com suporte a comandos de interrupcao como break e continue.

// 5. Quando NÃO usar:
// Nao use em objetos comuns que nao possuem Symbol.iterator (use for...in ou Object.entries),
// nem quando precisar apenas do indice numerico simples.

// 1. Percorrendo um array comum de botoes da interface
const botoesAcao = ['Salvar', 'Cancelar', 'Excluir'];

for (const botao of botoesAcao) {
  console.log('Botao renderizado:', botao);
}

// 2. Percorrendo uma string caractere por caractere
const codigoCupom = 'PROMO';

for (const caractere of codigoCupom) {
  console.log('Caractere do cupom:', caractere);
}

// 3. Percorrendo um objeto customizado com Symbol.iterator
const menuNavegacao = {
  links: ['Inicio', 'Produtos', 'Contato'],
  [Symbol.iterator]() {
    let i = 0;
    const dados = this.links;
    return {
      next() {
        if (i < dados.length) {
          const item = dados[i];
          i += 1;
          return { value: item, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const link of menuNavegacao) {
  console.log('Item de menu:', link);
}
