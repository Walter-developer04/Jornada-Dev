/**
 * EXERCICIO 05: Callback Hell (A Pirâmide da Destruição)
 *
 * 1. O QUE É O CALLBACK HELL?
 * Callback Hell (também chamado de "Pyramid of Doom" ou Pirâmide da Destruição)
 * é a designação dada ao padrão desorganizado que surge quando múltiplas operações
 * assíncronas dependentes são aninhadas sucessivamente dentro de callbacks de outras
 * callbacks.
 *
 * 2. COMO RECONHECER ESSE PADRÃO?
 * O código assume um formato visual triangular, expandindo a indentação progressivamente
 * para a direita em forma de cone (`>`).
 *
 * 3. QUAIS PROBLEMAS ELE CAUSA?
 * - Legibilidade crítica: Fica difícil rastrear onde cada fluxo começa e termina.
 * - Tratamento de erros caótico: Cada nível de aninhamento precisa checar erros
 *   individualmente (duplicação frequente de `if (erro)`).
 * - Acoplamento excessivo: Alterar a ordem dos passos ou adicionar uma etapa intermediária
 *   exige refatorar todo o aninhamento.
 * - Inversão de controle perigosa: Dependência cega de bibliotecas terceiras chamarem
 *   seu callback na ordem certa e sem duplicidade.
 *
 * 4. QUAL É A ALTERNATIVA MODERNA?
 * A evolução para Promises (encadeamento plano com .then) e a sintaxe async/await.
 *
 * 5. ERROS COMUNS E CUIDADOS:
 * - ATENÇÃO: Callbacks em si NÃO são um problema; o problema é o ANINHAMENTO sequencial excessivo.
 * - CUIDADO: Tentar contornar o Callback Hell criando dezenas de funções globais separadas
 *   apenas para tirar a indentação muitas vezes espalha a lógica pelo arquivo sem resolver o
 *   problema fundamental de fluxo.
 * - REGRA: Se uma operação assíncrona depende do resultado de outra, e esta de outra,
 *   evite aninhamento de callbacks; estruture a solução com Promises ou async/await.
 */

console.log("=== EXERCÍCIO 05: CALLBACK HELL ===");

// Funções simulando 3 operações assíncronas dependentes com convenção Node-style (error, data)
function autenticarUsuario(email, senha, callback) {
  setTimeout(() => {
    if (email === "clara@dev.com" && senha === "123456") {
      callback(null, { userId: 42, email: email });
    } else {
      callback(new Error("Credenciais inválidas."));
    }
  }, 100);
}

function carregarPermissoes(userId, callback) {
  setTimeout(() => {
    callback(null, { userId: userId, papeis: ["admin", "developer"] });
  }, 100);
}

function carregarConfiguracoesPainel(papeis, callback) {
  setTimeout(() => {
    callback(null, { tema: "dark", acessos: papeis.length });
  }, 100);
}

// DEMONSTRAÇÃO VISUAL DO CALLBACK HELL (A Pirâmide):
console.log("[Callback Hell] Iniciando fluxo sequencial aninhado...");

autenticarUsuario("clara@dev.com", "123456", (erroAuth, usuario) => {
  if (erroAuth) {
    console.error("Erro na autenticação:", erroAuth.message);
    return;
  }
  console.log("1. Autenticado com sucesso:", usuario.email);

  // Primeiro aninhamento
  carregarPermissoes(usuario.userId, (erroPermissoes, permissoes) => {
    if (erroPermissoes) {
      console.error("Erro ao obter permissões:", erroPermissoes.message);
      return;
    }
    console.log("2. Permissões obtidas:", permissoes.papeis.join(", "));

    // Segundo aninhamento (Pirâmide se aprofundando)
    carregarConfiguracoesPainel(permissoes.papeis, (erroConfig, configuracoes) => {
      if (erroConfig) {
        console.error("Erro ao carregar configurações:", erroConfig.message);
        return;
      }
      console.log("3. Painel configurado com sucesso! Tema:", configuracoes.tema);
      console.log("[Callback Hell] Fluxo finalizado. Observe a forma triangular do código acima.");
    });
  });
});