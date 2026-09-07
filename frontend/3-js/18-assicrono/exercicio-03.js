/**
 * EXERCICIO 03: setInterval e Cancelamento de Ciclos
 *
 * 1. O QUE É?
 * setInterval é um método do ambiente hospedeiro que agenda a execução repetida de uma
 * função a cada intervalo mínimo especificado em milissegundos.
 *
 * 2. PARA QUE SERVE?
 * Serve para criar rotinas periódicas, como atualizar um relógio na tela, executar
 * verificações de integridade simples (polling) ou contagens regressivas.
 *
 * 3. QUAL É A SINTAXE?
 * const intervalId = setInterval(callback, intervaloEmMs, ...argumentosOpcionais);
 * clearInterval(intervalId);
 *
 * 4. QUANDO USAR?
 * Quando uma mesma tarefa precisa ser repetida de maneira periódica e aproximada,
 * contanto que a tarefa seja rápida e síncrona.
 *
 * 5. QUANDO NÃO USAR E POR QUÊ?
 * NÃO use setInterval para chamadas assíncronas que dependem de rede (como requisições fetch).
 * Por que não usar? Se a requisição demorar mais tempo para responder do que o próprio
 * intervalo estabelecido, novas execuções serão disparadas antes da anterior terminar,
 * gerando acúmulo de requisições e sobrecarga de memória.
 * Nesses cenários, a boa prática é usar setTimeout recursivo/encadeado.
 *
 * 6. ERROS COMUNS E CUIDADOS:
 * - ERRO COMUM: Iniciar um setInterval e esquecer de salvar o identificador ou não criar
 *   uma condição de parada com clearInterval, gerando vazamento de memória (memory leak)
 *   e consumo infinito de CPU.
 * - CUIDADO: Intervalos não levam em conta o tempo que o callback gasta processando.
 * - REGRA: Todo setInterval deve conter uma regra clara de finalização ou ser explicitamente
 *   cancelado quando o recurso ou componente for desmontado.
 */

console.log("=== EXERCÍCIO 03: SETINTERVAL ===");

let contador = 0;
const limiteExecucoes = 3;

console.log(`[setInterval] Iniciando intervalo periódico a cada 200ms (Limite: ${limiteExecucoes} vezes)...`);

// Iniciamos o intervalo e salvamos a referência do ID
const idIntervalo = setInterval(() => {
  contador++;
  console.log(`[setInterval] Ciclo #${contador} executado.`);

  // Condição de parada explícita
  if (contador >= limiteExecucoes) {
    clearInterval(idIntervalo);
    console.log("[setInterval] Condição de parada atingida. clearInterval executado com sucesso.");
  }
}, 200);