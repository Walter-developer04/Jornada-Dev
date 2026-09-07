// 1. O que é:
// Sao sintaxes da linguagem (operador spread ... e desestruturacao de array)
// que consomem automaticamente o protocolo iteravel de um objeto.

// 2. Para que serve:
// Servem para expandir valores de um iteravel dentro de um array ou extrair
// posicoes especificas de forma concisa e declarativa.

// 3. Como usar:
// Use [...iteravel] para transformar a sequencia em array, ou [primeiro, segundo]
// para capturar os primeiros valores produzidos pelo iteravel.

// 4. Quando usar:
// Use para converter iteraveis personalizados em arrays nativos ou extrair itens
// pontuais sem chamar repetidamente o metodo next().

// 5. Quando NÃO usar:
// Nao use com geradores infinitos ou sequencias sem fim, pois a operacao tentara
// consumir toda a memoria travando a aplicacao.

// Objeto iteravel de tags de um artigo no front-end
const colecaoTags = {
  tags: ['javascript', 'frontend', 'css'],
  [Symbol.iterator]() {
    let posicao = 0;
    const itens = this.tags;
    return {
      next() {
        if (posicao < itens.length) {
          const valor = itens[posicao];
          posicao += 1;
          return { value: valor, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

// 1. Convertendo o iteravel em um array usando o operador spread
const listaTagsArray = [...colecaoTags];
console.log('Array convertido com spread:', listaTagsArray);

// 2. Extraindo elementos com desestruturacao de iteravel
const [tagPrincipal, tagSecundaria] = colecaoTags;
console.log('Tag principal:', tagPrincipal);
console.log('Tag secundaria:', tagSecundaria);

// 3. Espalhando caracteres de uma string
const letras = [...'VUE'];
console.log('Letras espalhadas:', letras);
