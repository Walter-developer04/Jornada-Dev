"use strict";
// Assunto: Template Literal Types
// Template Literal Types montam novos tipos combinando literais,
// como se fosse uma template string, mas no nivel de tipos.
// 3. Exemplo de utilizacao
const banner = "horizontal-grande";
const icone = "vertical-pequeno";
const acaoClique = "onClick";
const acaoFoco = "onFoco";
// 5. Demonstracao do resultado
console.log("Alinhamento do banner:", banner);
console.log("Alinhamento do icone:", icone);
console.log("Manipuladores gerados:", acaoClique, "e", acaoFoco);
// Valores fora das combinacoes geradas sao rejeitados.
// const erro: Alinhamento = "diagonal-medio"; // erro: nao existe em Alinhamento.
