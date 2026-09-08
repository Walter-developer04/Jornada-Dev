
// O que é?
// Um tipo de retorno que indica que a função não retorna nenhum valor útil.

// Para que serve?
// Funções executam ações (como logs ou mutações) mas não devolvem dados.

function registrarLog(mensagem: string): void {
  console.log(`[LOG] ${mensagem}`);
  // Não há return com valor
}

registrarLog("Sistema iniciado.");

