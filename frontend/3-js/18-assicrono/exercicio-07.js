/**
 * EXERCICIO 07: async/await e Sintaxe Moderna
 *
 * 1. O QUE É ASYNC/AWAIT?
 * async/await é um recurso sintático introduzido no ECMAScript 2017 (ES8) construído sobre
 * Promises e geradores. Ele permite escrever código assíncrono com a estrutura, clareza
 * e legibilidade de um código síncrono convencional.
 *
 * 2. PARA QUE SERVE?
 * Serve para eliminar a necessidade de encadeamentos longos de `.then()`, facilitando
 * a leitura linear do código e permitindo o uso da estrutura tradicional de controle
 * de exceções: `try...catch...finally`.
 *
 * 3. O QUE FAZ O "async"?
 * - Declara que uma função é assíncrona.
 * - Garante que o retorno da função seja SEMPRE uma Promise. Se você retornar um valor
 *   primitivo (ex: return 42), o JavaScript automaticamente o envolve em Promise.resolve(42).
 *
 * 4. O QUE FAZ O "await"?
 * - Pausa a execução da função async em que se encontra até que a Promise seja liquidada.
 * - Desempacota o valor resolvido da Promise diretamente para uma variável.
 * - Se a Promise for rejeitada, o await LANÇA um erro, que pode ser capturado pelo bloco catch.
 *
 * 5. NÃO CONFUNDA:
 * - await NÃO trava o navegador nem a aplicação! A Call Stack é liberada imediatamente
 *   para o Event Loop atender outras tarefas enquanto a Promise aguarda resolução.
 * - async/await NÃO transforma JavaScript em síncrono. O comportamento continua 100% assíncrono.
 *
 * 6. QUANDO NÃO USAR E POR QUÊ?
 * NÃO use await sucessivos em operações independentes.
 * Exemplo incorreto:
 *   const dadosA = await buscarA(); // espera 1s
 *   const dadosB = await buscarB(); // espera mais 1s totalizando 2s
 * Se A e B não dependem um do outro, dispare-os simultaneamente com:
 *   const [dadosA, dadosB] = await Promise.all([buscarA(), buscarB()]); // total: 1s
 *
 * 7. ERROS COMUNS E CUIDADOS:
 * - ERRO COMUM: Esquecer a palavra `await` antes de uma função assíncrona. A variável
 *   receberá o objeto `Promise { <pending> }` em vez do valor retornado.
 * - REGRA: A palavra `await` só pode ser usada dentro de funções declaradas com `async`
 *   (com exceção de módulos ECMAScript modernos que suportam Top-Level Await).
 */

console.log("=== EXERCÍCIO 07: ASYNC / AWAIT ===");

// Função auxiliar que retorna uma Promise
function simularRequisicaoServico(nomeServico, tempoMs, deveFalhar = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (deveFalhar) {
        reject(new Error(`Falha no serviço: ${nomeServico}`));
      } else {
        resolve({ servico: nomeServico, status: 200, resposta: "Dados carregados com sucesso" });
      }
    }, tempoMs);
  });
}

// Declaração de função assíncrona
async function executarFluxoCompleto() {
  console.log("[async/await] Iniciando processamento linear...");

  try {
    // 1. Primeira etapa assíncrona pausando apenas esta função
    console.log("[async/await] Aguardando Serviço de Autenticação...");
    const auth = await simularRequisicaoServico("Autenticacao", 150);
    console.log("[async/await] Sucesso:", auth.servico, "->", auth.resposta);

    // 2. Segunda etapa assíncrona que depende da conclusão da anterior
    console.log("[async/await] Aguardando Serviço de Perfil...");
    const perfil = await simularRequisicaoServico("PerfilDoUsuario", 150);
    console.log("[async/await] Sucesso:", perfil.servico, "->", perfil.resposta);

    // 3. Demonstração de captura com try/catch ao disparar um erro
    console.log("[async/await] Tentando consultar serviço com falha planejada...");
    const relatorio = await simularRequisicaoServico("Relatorios", 100, true);
    console.log("Esta linha não executará devido ao erro lançado:", relatorio);

  } catch (erro) {
    // Qualquer falha em qualquer um dos awaits cai imediatamente neste bloco
    console.error("[async/await] Erro capturado via try/catch:", erro.message);

  } finally {
    // Executa garantidamente ao final de todo o processo
    console.log("[async/await] Bloco finally executado: Encerramento do ciclo.");
  }
}

// Invocação da função assíncrona
executarFluxoCompleto();