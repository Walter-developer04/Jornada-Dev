// Exercício 03: this em Funções

"use strict";

// STRICT MODE: this não aponta para o objeto global
function funcaoSolta() {
  console.log("Valor de this:", this); // undefined
  return this;
}

// STRICT MODE: this em métodos de objeto
const objeto = {
  propriedade: "valor",
  metodo: function() {
    console.log("Valor de this dentro do método:", this);
    return this.propriedade;
  }
};

// STRICT MODE: Chamada de método sem receptor
const metodoExtraido = objeto.metodo;

try {
  metodoExtraido(); // this será undefined
} catch (erro) {
  console.error("Erro ao chamar método sem contexto:", erro.message);
}

// Comparação com modo não-strict (comente o "use strict" acima)
function modoNaoStrict() {
  // Sem "use strict", this apontaria para o objeto global
  console.log("Valor de this sem strict:", this);
  return this;
}

// Testes
console.log("Resultado funcaoSolta:", funcaoSolta());
console.log("Método do objeto:", objeto.metodo());
console.log("Função não-strict:", modoNaoStrict());
