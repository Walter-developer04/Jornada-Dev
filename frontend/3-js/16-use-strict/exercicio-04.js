// Exercício 04: Modificação de Objetos

"use strict";

// 1. Tentativa de modificar propriedade não configurável
const objeto = {
  propriedadeFixa: "não pode mudar"
};

// Definir propriedade como não configurável
Object.defineProperty(objeto, 'propriedadeFixa', {
  configurable: false,
  writable: false
});

//  ERRO EM STRICT MODE: Modificar propriedade não configurável
try {
  delete objeto.propriedadeFixa;
} catch (erro) {
  console.error("Erro ao tentar deletar:", erro.name);
  console.error("Mensagem:", erro.message);
}

// ERRO EM STRICT MODE: Modificar propriedade não gravável
try {
  objeto.propriedadeFixa = "novo valor";
} catch (erro) {
  console.error("Erro ao tentar modificar:", erro.name);
  console.error("Mensagem:", erro.message);
}

// 2. Tentativa de adicionar propriedade a objeto não extensível
const objetoCongelado = Object.freeze({ propriedade: "valor" });

try {
  objetoCongelado.novaPropriedade = "novo";
} catch (erro) {
  console.error("Erro ao adicionar propriedade:", erro.name);
  console.error("Mensagem:", erro.message);
}

// Comparação com modo não-strict (comente o "use strict" acima)
function modoNaoStrict() {
  const obj = {};
  obj.propriedadeNaoDeclarada = "funciona sem strict";
  return "Sem strict, estas operações silenciosamente falham";
}

console.log(modoNaoStrict());
