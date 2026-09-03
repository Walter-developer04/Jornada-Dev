// ============================================================
// EXERCÍCIO 08 — Logical Operators (Operadores Lógicos)
// ============================================================
//
// OPERADORES:
//   &&    AND lógico   → retorna expr1 se for falsy; senão, retorna expr2
//   ||    OR lógico    → retorna expr1 se for truthy; senão, retorna expr2
//   ??    coalescência nula → retorna expr1 se NÃO for null/undefined; senão, expr2
//   !     NOT lógico   → inverte o valor booleano
//
// IMPORTANTE: &&, || e ?? retornam o VALOR de um dos operandos
// (não apenas true/false) — por isso também são chamados de
// "operadores de seleção de valor".
//
// Valores falsy: false, null, undefined, 0, -0, 0n, NaN e "".
//
// AVALIAÇÃO DE CURTO-CIRCUITO (short-circuit):
//   - falsy && qualquerCoisa  → retorna o valor falsy (expr2 NÃO é avaliada)
//   - truthy || qualquerCoisa → retorna o valor truthy (expr2 NÃO é avaliada)
//   - nãoNulo ?? qualquerCoisa → retorna o primeiro valor (expr2 NÃO é avaliada)

// ---------- Exemplo 1: AND (&&) ----------
console.log(true && true);     // true
console.log(true && false);    // false
console.log(false && true);    // false

// Com valores não booleanos, retorna o VALOR de um dos operandos:
console.log("gato" && "cão");  // "cão" (ambos truthy → retorna o último)
console.log(false && "gato");  // false (primeiro é falsy → curto-circuito)
console.log(0 && "gato");      // 0

// ---------- Exemplo 2: OR (||) ----------
console.log(true || false);    // true
console.log(false || false);   // false

// Retorna o primeiro valor truthy encontrado:
console.log("gato" || "cão");  // "gato" (primeiro já é truthy)
console.log(false || "gato");  // "gato"
console.log("" || "padrão");   // "padrão" (string vazia é falsy)

// Uso clássico: valor padrão:
const nomeUsuario = "";
const nomeExibido = nomeUsuario || "visitante";

console.log(nomeExibido); // "visitante"

// ---------- Exemplo 3: nullish coalescing (??) ----------
// Diferente do ||, só retorna o segundo valor quando o primeiro é
// null ou undefined. Valores como 0 e "" são preservados:
console.log(null ?? 1);    // 1
console.log(undefined ?? 2); // 2
console.log(false ?? 3);   // false (false NÃO é nullish!)
console.log(0 ?? 4);       // 0 (0 NÃO é nullish!)
console.log("" ?? 5);      // ""

// Comparação direta:
const volume = 0;
console.log(volume || 50);  // 50 (0 é falsy → || troca)
console.log(volume ?? 50);  // 0  (0 não é nullish → ?? preserva)

// ---------- Exemplo 4: NOT (!) ----------
console.log(!true);   // false
console.log(!false);  // true
console.log(!"gato"); // false (truthy negado)
console.log(!0);      // true

// Dupla negação converte qualquer valor para booleano:
console.log(!!"gato"); // true
console.log(!!0);      // false

// ---------- Exemplo 5: curto-circuito em ação ----------
// O segundo operando NEM SEMPRE é avaliado. Isso evita erros:
const usuario = null;

// Sem o &&, usuario.nome lançaria TypeError (null não tem propriedades):
const nomeSeguro = usuario && usuario.nome;

console.log(nomeSeguro); // null (usuario é falsy → curto-circuito, .nome nunca acessado)

// ---------- Exemplo 6: combinando operadores ----------
const idade = 25;
const temCarteira = true;

// Pode dirigir: precisa ser maior de idade E ter carteira:
const podeDirigir = idade >= 18 && temCarteira;

console.log(podeDirigir); // true

// Precedência: ! vem antes de &&, que vem antes de ||:
const estaChovendo = true;
const temGuardaChuva = false;
const ficaEmCasa = estaChovendo && !temGuardaChuva;

console.log(ficaEmCasa); // true
