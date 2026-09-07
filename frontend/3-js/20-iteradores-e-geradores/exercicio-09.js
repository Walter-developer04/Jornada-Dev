// 1. O que é:
// Sao metodos da instancia do gerador: return(val) encerra a execucao forcadamente,
// e throw(err) injeta um erro no ponto onde o gerador esta pausado.

// 2. Para que serve:
// Servem para dar ao consumidor o controle de abortar geradores ou sinalizar falhas,
// permitindo que o gerador execute limpezas em blocos try...finally.

// 3. Como usar:
// Chame gerador.return(valor) para finalizar com done: true, ou gerador.throw(erro)
// dentro de um contexto com try/catch para capturar o erro internamente.

// 4. Quando usar:
// Use para cancelar tarefas ou processos sob demanda (como fechar modais)
// e liberar recursos quando o usuario interromper um fluxo.

// 5. Quando NÃO usar:
// Nao use para controle de fluxo normal da aplicacao, pois excecoes devem ser
// reservadas para situacoes de erro ou interrupcao inesperada.

// 1. Exemplo do metodo return() para encerramento antecipado
function* monitorConexao() {
  try {
    yield 'Conexao estabelecida';
    yield 'Transmitindo dados';
    yield 'Sincronizacao concluida';
  } finally {
    console.log('Bloco finally: recursos liberados com sucesso.');
  }
}

const monitor = monitorConexao();
console.log(monitor.next()); // { value: 'Conexao estabelecida', done: false }

// Encerra imediatamente o gerador antes dos proximos yields
console.log(monitor.return('Cancelado pelo usuario')); // { value: 'Cancelado pelo usuario', done: true }
console.log(monitor.next()); // { value: undefined, done: true }

// 2. Exemplo do metodo throw() para injetar e tratar erro
function* fluxoAutenticacao() {
  try {
    yield 'Aguardando credenciais...';
    yield 'Validando token...';
  } catch (erro) {
    console.log('Erro capturado dentro do gerador:', erro);
    yield 'Status: Redirecionando para tela de login';
  }
}

const auth = fluxoAutenticacao();
console.log(auth.next()); // { value: 'Aguardando credenciais...', done: false }

// Injeta um erro no gerador
console.log(auth.throw('Token expirado')); // { value: 'Status: Redirecionando para tela de login', done: false }
console.log(auth.next()); // { value: undefined, done: true }
