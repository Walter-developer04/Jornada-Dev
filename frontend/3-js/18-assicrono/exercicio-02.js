/**
 * EXERCICIO 02: setTimeout e Temporizadores Assíncronos
 *
 * 1. O QUE É?
 * setTimeout é um método fornecido pelo ambiente hospedeiro (objeto window no browser
 * ou global/timers no Node.js) que agenda a execução de uma função de retorno após um
 * período mínimo de tempo em milissegundos.
 *
 * 2. PARA QUE SERVE?
 * Serve para adiar a execução de uma rotina, implementar técnicas de debounce, agendar
 * tarefas secundárias ou aguardar antes de atualizar um estado na interface.
 *
 * 3. QUAL É A SINTAXE?
 * const timeoutId = setTimeout(callback, atrasoEmMs, ...argumentosOpcionais);
 * clearTimeout(timeoutId);
 *
 * 4. QUANDO USAR?
 * Quando você precisa que uma ação ocorra com atraso intencional, sem bloquear a
 * execução do restante da aplicação.
 *
 * 5. QUANDO NÃO USAR E POR QUÊ?
 * NÃO use para temporização de alta precisão (como relógios atômicos, física de jogos
 * a 60fps ou sincronização de áudio).
 * Por que não usar nesses casos? O atraso configurado NÃO é uma garantia de execução
 * no instante exato. É uma garantia de ATRASO MÍNIMO. Se a Call Stack estiver ocupada
 * processando código pesado quando o tempo expirar, a função aguardará na Task Queue.
 *
 * 6. ERROS COMUNS E CUIDADOS:
 * - ATENÇÃO OBRIGATÓRIA: setTimeout(fn, 1000) não significa "execute exatamente em 1s",
 *   mas sim "coloque fn na fila após pelo menos 1000ms".
 * - ERRO COMUM: Invocação acidental: escrever setTimeout(minhaFuncao(), 1000). Isso executa
 *   a função imediatamente no momento da leitura e passa o valor retornado (undefined)
 *   para o timer. O correto é passar a referência: setTimeout(minhaFuncao, 1000).
 * - CUIDADO: Esquecer de armazenar o timeoutId caso precise cancelar a ação com clearTimeout.
 * - REGRA: clearTimeout só funciona se for chamado antes do callback ser processado pela pilha.
 */

console.log("=== EXERCÍCIO 02: SETTIMEOUT ===");

// Exemplo 1: Agendamento com atraso mínimo de 300ms
console.log("[setTimeout] Agendando mensagem para daqui a 300ms...");
const timerId1 = setTimeout(() => {
  console.log("[setTimeout] Callback 1 executado após o tempo mínimo de 300ms.");
}, 300);

// Exemplo 2: Passagem de argumentos adicionais para o callback
setTimeout((nome, modulo) => {
  console.log(`[setTimeout] Callback 2 executado: Aluna ${nome}, estudando ${modulo}.`);
}, 400, "Clara", "JavaScript Assíncrono");

// Exemplo 3: Cancelamento prévio usando clearTimeout
const timerParaCancelar = setTimeout(() => {
  console.log("[setTimeout] ERRO: Este callback nunca deveria ser executado!");
}, 500);

// Cancelando o timer antes que seus 500ms expirem
clearTimeout(timerParaCancelar);
console.log("[setTimeout] Timer de 500ms cancelado com sucesso via clearTimeout.");