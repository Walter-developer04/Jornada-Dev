// ASSUNTO: Vinculação Explícita / Explicit Binding

// O que é?
// Vinculação Explícita é o mecanismo fornecido pela linguagem JavaScript que permite
// ao desenvolvedor FORÇAR e determinar manualmente qual será o valor de "this"
// dentro de uma função durante sua invocação ou preparação, ignorando as regras
// de vinculação implícita (objeto antes do ponto) ou vinculação padrão.

// Para que serve?
// Serve para assumir o controle total sobre o contexto de execução de uma função,
// permitindo reaproveitar funções genéricas sobre qualquer objeto desejado e
// neutralizar incertezas sobre para onde "this" estaria apontando.

// Sintaxe:
// As três ferramentas centrais da Vinculação Explícita vêm do Function.prototype:
// 1. funcao.call(thisArg, param1, param2, ...)   -> Execução imediata com argumentos separados
// 2. funcao.apply(thisArg, [param1, param2, ...]) -> Execução imediata com argumentos em lista
// 3. funcao.bind(thisArg, param1, ...)           -> Retorna nova função com "this" pré-definido

// Como usar?
// Escolha a ferramenta de acordo com o momento da execução:
// - Deseja executar agora? Use .call() ou .apply().
// - Deseja agendar a execução para depois (callback)? Use .bind().

// Quando deve usar?
// 1. Ao desacoplar métodos de objetos para utilizá-los sobre outros dados.
// 2. Ao passar métodos de objetos para temporizadores (setTimeout) ou listeners de evento
//    onde o contexto original precisa ser mantido.
// 3. Ao programar bibliotecas flexíveis e utilitárias.

// Por que usar nesses casos?
// Porque elimina a fragilidade do "this" implícito, garantindo que, não importa onde
// ou quem dispare a função, o alvo de operação ("this") será exatamente o que você determinou.

// Quando não deve usar?
// Não tente usar vinculação explícita em Arrow Functions.
// Também evite o excesso de vinculação explícita manual se uma estrutura orientada a objetos simples
// ou funções puras com parâmetros normais resolverem o problema de forma mais legível.

// Por que não deve usar nesses casos?
// Conforme a especificação ECMAScript, arrow functions ignoram o "thisArg" de call, apply e bind.
// Além disso, o excesso de manipulação explícita de "this" pode obscurecer o fluxo de leitura do código.

// Qual comportamento devo observar?
// "thisArg" torna-se o objeto ativo acessível através da palavra "this" durante a execução da função.

// ATENÇÃO:
// Em modo não-estrito, se você passar `null` ou `undefined` como "thisArg" em call/apply/bind,
// o JavaScript converterá automaticamente para o objeto global.
// Em modo estrito ("use strict"), o valor passado permanece exatamente `null` ou `undefined`.

// ERRO COMUM:
// Confundir os métodos de execução imediata (call/apply) com o método de retorno de nova função (bind).

// REGRA GERAL:
// Explicit Binding sobrepõe tanto a vinculação implícita quanto a vinculação padrão.
// Ordem de precedência: new > Explicit Binding (bind/call/apply) > Implicit Binding > Default.

// Exemplo Didático Executável — Visão Geral Comparativa:
function emitirRelatorio(tipoRelatorio, data) {
  console.log(`[exercicio-07] Relatório: ${tipoRelatorio} | Data: ${data} | Entidade: ${this.razaoSocial} (CNPJ: ${this.cnpj})`);
}

const empresaAlpha = { razaoSocial: "Alpha Tech Ltda", cnpj: "11.111.111/0001-11" };
const empresaBeta  = { razaoSocial: "Beta Serviços S.A.", cnpj: "22.222.222/0001-22" };

console.log("[exercicio-07] 1. Vinculação explícita IMEDIATA com .call():");
emitirRelatorio.call(empresaAlpha, "Fiscal", "01/10/2026");

console.log("\n[exercicio-07] 2. Vinculação explícita IMEDIATA com .apply():");
emitirRelatorio.apply(empresaBeta, ["Auditoria", "15/10/2026"]);

console.log("\n[exercicio-07] 3. Vinculação explícita RETARDADA com .bind():");
const relatorioAlphaVinculado = emitirRelatorio.bind(empresaAlpha, "Semanal");
// A função NÃO executou na linha anterior. Executamos agora:
relatorioAlphaVinculado("20/10/2026");