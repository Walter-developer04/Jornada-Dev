// Assunto: Template Literal Types
// Template Literal Types montam novos tipos combinando literais,
// como se fosse uma template string, mas no nivel de tipos.

// 1. Literais que serao combinados
type Direcao = "horizontal" | "vertical";
type Tamanho = "pequeno" | "grande";

// 2. Combinacao: a sintaxe e a mesma de uma template string comum.
// O novo tipo aceita apenas as quatro combinacoes possiveis:
// "horizontal-pequeno", "horizontal-grande",
// "vertical-pequeno", "vertical-grande".
type Alinhamento = `${Direcao}-${Tamanho}`;

// 3. Exemplo de utilizacao
const banner: Alinhamento = "horizontal-grande";
const icone: Alinhamento = "vertical-pequeno";

// 4. Combinando literais com o modificador Capitalize, embutido no TypeScript.
type Evento = "clique" | "foco";
type Manipulador = `on${Capitalize<Evento>}`;

const acaoClique: Manipulador = "onClick";
const acaoFoco: Manipulador = "onFoco";

// 5. Demonstracao do resultado
console.log("Alinhamento do banner:", banner);
console.log("Alinhamento do icone:", icone);
console.log("Manipuladores gerados:", acaoClique, "e", acaoFoco);

// Valores fora das combinacoes geradas sao rejeitados.
// const erro: Alinhamento = "diagonal-medio"; // erro: nao existe em Alinhamento.
