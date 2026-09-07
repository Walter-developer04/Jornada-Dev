// ASSUNTO: this em manipuladores de eventos (Event Handlers no DOM)

// O que é?
// Trata-se do comportamento específico de "this" quando uma função é registrada
// como ouvinte de evento (via addEventListener) em um elemento da API DOM (navegadores).

// Para que serve?
// Serve para permitir que a função manipuladora acesse imediatamente o elemento HTML
// que disparou e manipulou o evento, sem precisar depender de variáveis externas.

// Sintaxe (Ambiente Web / DOM):
// elemento.addEventListener("click", function(evento) {
//   console.log(this); // Refere-se ao elemento que recebeu o listener
// });

// Como usar?
// Use uma função tradicional (function declaration ou function expression) como callback.
// A especificação DOM define que o navegador chama esse ouvinte definindo "this"
// como o elemento alvo ao qual o ouvinte foi vinculado (equivalente a evento.currentTarget).

// Quando deve usar?
// Quando você cria componentes puramente manipulados via DOM tradicional e deseja
// que o callback atue diretamente sobre as propriedades do elemento que acionou a escuta.

// Por que usar nesses casos?
// Facilita o reaproveitamento: o mesmo manipulador pode ser anexado a 50 botões diferentes,
// e o "this" apontará exatamente para o botão clicado da vez.

// Quando não deve usar?
// NÃO use se você escrever o manipulador como Arrow Function esperando que "this" seja o elemento.

// Por que não deve usar nesses casos?
// Arrow functions capturam o "this" léxico do momento da definição (geralmente window ou a classe),
// ignorando solenemente o elemento HTML fornecido pelo navegador.

// Qual comportamento devo observar?
// Em funções tradicionais: this === event.currentTarget (o elemento dono do addEventListener).
// Em arrow functions: this permanece o contexto léxico superior (ex: window).

// ATENÇÃO ESPECÍFICA DE AMBIENTE:
// Este comportamento é uma convenção implementada pelos navegadores através da API DOM.
// Ambientes de servidor (como Node.js puro sem JSDOM) não possuem elementos DOM nativos.

// ERRO COMUM:
// Trocar "function" por "arrow function" no addEventListener e se surpreender
// porque "this.classList" ou "this.value" resulta em TypeError (undefined).

// REGRA:
// No addEventListener do navegador:
// Função Tradicional -> this = elemento HTML (event.currentTarget).
// Arrow Function -> this = herança léxica externa.
// Alternativa moderna universal: use o parâmetro (event.currentTarget) para não depender de "this".

// Exemplo Didático / Simulação Executável:
// Criamos um mock representativo para entender exatamente como o navegador opera:
class ElementoHTMLMock {
  constructor(id, tag) {
    this.id = id;
    this.tag = tag;
  }

  // Simulação interna do método addEventListener do navegador:
  simularEventoClick(callbackTradicional, callbackArrow) {
    const eventoMock = { target: this, currentTarget: this };

    console.log("\n[exercicio-04] Disparando com função tradicional:");
    // O navegador internamente faz: callback.call(this, evento)
    callbackTradicional.call(this, eventoMock);

    console.log("\n[exercicio-04] Disparando com Arrow Function:");
    // O navegador até tenta passar 'this', mas a arrow function ignora a vinculação:
    callbackArrow.call(this, eventoMock);
  }
}

const botaoSalvar = new ElementoHTMLMock("btn-salvar", "BUTTON");

// 1. Função Tradicional: "this" receberá o elemento
function handlerTradicional(evento) {
  console.log(`[exercicio-04] Handler tradicional -> this.id: '${this.id}' (Tag: ${this.tag})`);
  console.log(`[exercicio-04] this é igual a evento.currentTarget? ${this === evento.currentTarget}`);
}

// 2. Arrow Function: "this" manterá o escopo léxico externo (aqui, o módulo Node)
const handlerArrow = (evento) => {
  console.log(`[exercicio-04] Handler arrow -> this é o elemento? ${this === evento.currentTarget}`);
  console.log(`[exercicio-04] this atual da arrow:`, this);
};

botaoSalvar.simularEventoClick(handlerTradicional, handlerArrow);