// ============================================================
// EXERCÍCIO 01 — Conditional Operators (Operador Condicional)
// ============================================================
//
// SINTAXE:
//   condicao ? expressaoSeVerdadeiro : expressaoSeFalso
//
// É o ÚNICO operador do JavaScript que usa TRÊS operandos.
// Se a condição for "truthy", retorna exprIfTrue; senão, retorna exprIfFalse.
//
// Valores falsy (convertidos para false): false, null, NaN, 0, "" e undefined.
// Todos os outros valores são truthy.

// ---------- Exemplo 1: uso básico ----------
const idade = 20;
const bebida = idade >= 18 ? "café" : "suco";

console.log(bebida); // "café" (porque 20 >= 18 é true)

// ---------- Exemplo 2: equivalente com if...else ----------
// As duas formas abaixo fazem exatamente a mesma coisa:
const pontos = 75;

// Com if...else:
let nivelComIf;
if (pontos >= 50) {
  nivelComIf = "aprovado";
} else {
  nivelComIf = "reprovado";
}

// Com operador condicional (bem mais curto):
const nivelComTernario = pontos >= 50 ? "aprovado" : "reprovado";

console.log(nivelComIf);         // "aprovado"
console.log(nivelComTernario);   // "aprovado"

// ---------- Exemplo 3: lidando com valores null ----------
// Uso comum: fornecer um valor padrão quando algo pode ser null/undefined.
const pessoa = { nome: "Ana" };
const nome = pessoa ? pessoa.nome : "visitante";

console.log(nome); // "Ana"

const pessoaVazia = null;
const nomePadrao = pessoaVazia ? pessoaVazia.nome : "visitante";

console.log(nomePadrao); // "visitante" (porque null é falsy)

// ---------- Exemplo 4: encadeamento (cadeia de condições) ----------
// O operador é associativo à direita, então pode ser encadeado
// como um if...else if...else:
const nota = 8;
const conceito =
  nota >= 9 ? "A"
  : nota >= 7 ? "B"
  : nota >= 5 ? "C"
  : "D";

console.log(conceito); // "B"

// ---------- Exemplo 5: cuidado com valores falsy ----------
// 0, "" e null são falsy! Veja a diferença:
const quantidade = 0;
const mensagem = quantidade ? "tem itens" : "não tem itens";

console.log(mensagem); // "não tem itens" (0 é falsy, mesmo sendo um número válido)
