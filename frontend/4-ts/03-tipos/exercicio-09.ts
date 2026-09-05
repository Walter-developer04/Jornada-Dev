// O tipo "void" no sistema de tipos do TypeScript.
//
// Para que isso serve?
// É utilizado primordialmente como tipo de retorno de funções para indicar a ausência intencional de um valor retornado.
//
// Qual comportamento devo observar?
// "void" não é um valor primitivo do JavaScript em tempo de execução. Na tipagem do TypeScript, ele documenta que a função executa uma ação sem produzir um resultado observável.

function emitirNotificacaoStatus(mensagemAviso: string): void {
  console.log(`[NOTIFICACAO]: ${mensagemAviso}`);
}

emitirNotificacaoStatus("Processamento de dados concluido.");
