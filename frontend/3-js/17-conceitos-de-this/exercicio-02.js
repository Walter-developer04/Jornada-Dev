// ASSUNTO: this em uma função tradicional (Vinculação Padrão / Default Binding)

// O que é?
// É o comportamento de "this" quando uma função tradicional é chamada de forma
// simples e autônoma, sem nenhum prefixo de objeto (sem nada à esquerda do ponto)
// e sem o uso de vinculações explícitas (como call, apply ou bind).

// Para que serve?
// Tecnicamente é a regra de recuo (fallback) da linguagem. Em versões legadas do JS,
// garantia que "this" apontasse para o ambiente global. No JavaScript moderno,
// serve principalmente para alertar sobre chamadas fora de contexto via modo estrito.

// Sintaxe:
// function minhaFuncao() {
//   console.log(this);
// }
// minhaFuncao(); // Chamada autônoma (standalone)

// Como usar?
// Em código moderno com "use strict", "this" em chamadas normais avalia para undefined,
// prevenindo poluição acidental do escopo global.

// Quando deve usar?
// Em funções puras ou utilitárias autônomas, normalmente você NÃO deve depender de "this".
// Se a função não pertence a um objeto ou construtor, trabalhe explicitamente com parâmetros.

// Por que usar nesses casos?
// Não depender de "this" em funções simples torna o código determinístico,
// imutável e livre de efeitos colaterais globais.

// Quando não deve usar?
// Não dependa de "this" em funções normais esperando acessar o objeto global (window/global).

// Por que não deve usar nesses casos?
// O modo estrito ("use strict") transforma esse "this" em undefined para evitar bugs graves,
// como sobrescrever propriedades globais por engano.

// Qual comportamento devo observar?
// - Modo Não-Estrito (Sloppy Mode): "this" aponta para o objeto global (window no navegador, global no Node.js).
// - Modo Estrito ("use strict"): "this" é rigidamente undefined.

// ATENÇÃO:
// No ECMAScript moderno (ES6+), módulos JavaScript (ES Modules) e corpos de classes
// operam OBRIGATORIAMENTE em strict mode por padrão.

// ERRO COMUM:
// Achar que "this" dentro de uma função comum aponta para o escopo léxico da função
// ou para as variáveis declaradas com let/const dentro dela. "this" NUNCA aponta
// para o escopo de variáveis da própria função!

// REGRA:
// Chamada pura e simples: fn(). Se não houver objeto antes do ponto e não houver bind:
// Sem strict mode = Objeto Global.
// Com strict mode = undefined.

// Exemplo Prático Executável:

// 1. Função em modo não-estrito
function demonstrarSloppyMode() {
  return this; // Retorna o objeto global correspondente ao ambiente
}

// 2. Função em modo estrito
function demonstrarStrictMode() {
  "use strict";
  return this; // Avalia rigorosamente como undefined
}

console.log("[exercicio-02] Invocação pura (Sloppy):", demonstrarSloppyMode() !== undefined ? "Apontou para o Objeto Global" : "undefined");
console.log("[exercicio-02] Invocação pura (Strict):", demonstrarStrictMode()); // undefined

// Teste de segurança em modo estrito:
function alterarValorSeguro() {
  "use strict";
  try {
    this.nome = "Tentativa Inválida";
  } catch (err) {
    console.log(`[exercicio-02] Tentativa de modificar this em strict mode falhou: ${err.message}`);
  }
}
alterarValorSeguro();