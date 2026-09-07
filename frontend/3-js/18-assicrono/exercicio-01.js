/**
 * EXERCICIO 01: Event Loop e Modelo de Concorrência
 *
 * 1. O QUE É?
 * O Event Loop (Ciclo de Eventos) é o mecanismo de coordenação do JavaScript
 * responsável por gerenciar a execução de código, a coleta e o processamento de
 * eventos e a execução de subtarefas enfileiradas.
 *
 * 2. COMO FUNCIONA A ARQUITETURA?
 * O motor do JavaScript (como o V8) possui uma única Call Stack (pilha de chamadas),
 * o que significa que o JavaScript é "single-threaded" (executa uma única instrução
 * por vez no seu fluxo principal).
 * A concorrência é possibilitada pelo ambiente hospedeiro (navegador ou Node.js),
 * composto por:
 *   - Call Stack: Onde o código síncrono é empilhado e executado (LIFO: Last In, First Out).
 *   - APIs do Ambiente (Web APIs / C++ APIs do Node): Processam temporizadores, I/O e rede em segundo plano.
 *   - Microtask Queue (Fila de Microtarefas): Fila de ALTA prioridade onde ficam callbacks de
 *     Promises (.then/.catch/.finally) e queueMicrotask.
 *   - Task / Macrotask Queue (Fila de Macrotarefas): Fila de tarefas de prioridade comum,
 *     onde entram callbacks de setTimeout, setInterval e eventos de I/O.
 *
 * 3. QUAL A REGRA DE OURO DO EVENT LOOP?
 * O Event Loop monitora constantemente a Call Stack:
 *   Passo A: Executa todo o código síncrono presente na Call Stack até ela ficar VAZIA.
 *   Passo B: Processa TODAS as tarefas da Microtask Queue até ela esvaziar completamente.
 *   Passo C: Retira a PRIMEIRA macrotarefa da Task Queue e a transfere para a Call Stack.
 *   Passo D: Retorna ao passo B e repete o ciclo continuamente.
 *
 * 4. QUAL COMPORTAMENTO DEVO OBSERVAR?
 * O código síncrono executa primeiro. As microtarefas executam imediatamente após o
 * código síncrono. As macrotarefas (como setTimeout) só executam após a Call Stack
 * e a Microtask Queue estarem vazias.
 *
 * 5. ERROS COMUNS E CUIDADOS:
 * - ERRO COMUM: Achar que JavaScript roda múltiplas funções de código JS em paralelo na mesma thread.
 * - CUIDADO: Um loop síncrono pesado (ex: while longo) na Call Stack trava toda a aplicação,
 *   impedindo que o Event Loop processe eventos de clique, timers ou requisições de rede.
 * - ATENÇÃO: setTimeout com atraso 0 não executa imediatamente; ele apenas agenda a tarefa
 *   para a próxima iteração possível da Task Queue.
 * - REGRA: A Call Stack tem prioridade absoluta. Nenhuma tarefa de fila entra enquanto a pilha estiver ocupada.
 */

console.log("=== EXERCÍCIO 01: EVENT LOOP ===");

// 1. Instrução síncrona enviada diretamente para a Call Stack
console.log("1. [Síncrono] Início do script");

// 2. Operação delegada à API de temporizadores. Quando concluída, vai para a Macrotask Queue.
setTimeout(() => {
  console.log("4. [Macrotask] Callback do setTimeout disparado (agendado com 0ms)");
}, 0);

// 3. Resolução de Promise. O handler registrado vai diretamente para a Microtask Queue.
Promise.resolve().then(() => {
  console.log("3. [Microtask] Callback da Promise resolvida executado");
});

// 4. Mais uma instrução síncrona enviada para a Call Stack
console.log("2. [Síncrono] Fim do script");

// Ordem observável no console:
// 1. [Síncrono] Início do script
// 2. [Síncrono] Fim do script
// 3. [Microtask] Callback da Promise resolvida executado
// 4. [Macrotask] Callback do setTimeout disparado (agendado com 0ms)