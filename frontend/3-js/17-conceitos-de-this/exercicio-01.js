// ASSUNTO: this em um método (Vinculação Implícita / Implicit Binding)

// O que é?
// Em JavaScript, quando uma função tradicional é invocada como método de um objeto
// (isto é, chamada com a sintaxe de acesso a propriedade objeto.metodo()), o valor de
// "this" dentro dessa função é automaticamente vinculado ao objeto que precede o ponto.

// Para que serve?
// Serve para permitir que o método acesse, manipule e interaja com os dados internos
// (propriedades) e outros métodos da própria instância do objeto que o está invocando,
// sem a necessidade de fixar o nome da variável globalmente.

// Sintaxe:
// const objeto = {
//   propriedade: valor,
//   metodo() {
//     console.log(this.propriedade);
//   }
// };
// objeto.metodo(); // Aqui, "this" aponta para "objeto"

// Como usar?
// Defina uma função como propriedade de um objeto e execute-a usando a notação
// de ponto (objeto.metodo()) ou colchetes (objeto["metodo"]()).

// Quando deve usar?
// Sempre que estiver modelando objetos com estado (dados) e comportamento (ações)
// e precisar que o método opere sobre o próprio objeto que foi chamado.

// Por que usar nesses casos?
// Porque mantém o código coeso, encapsulado e reutilizável. O método opera dinamicamente
// no contexto da instância correspondente.

// Quando não deve usar?
// Não tente acessar "this" dessa forma se você extrair o método para uma variável solta
// ou passá-lo como callback sem preservar a vinculação, pois o contexto do método será perdido.

// Por que não deve usar nesses casos?
// Ao separar o método do seu objeto hospedeiro (ex: const fn = objeto.metodo; fn()),
// a chamada perde a referência do ponto no local da invocação (call-site). Assim,
// o "this" recairá na regra padrão (undefined em strict mode ou objeto global).

// Qual comportamento devo observar?
// "this" NÃO depende de onde o método foi declarado, mas sim de COMO ele foi invocado
// no momento exato da execução (o que está à esquerda do ponto na chamada).

// ATENÇÃO:
// Se houver encadeamento de objetos (ex: objA.objB.metodo()), o "this" será objB,
// que é o objeto imediatamente anterior ao ponto na invocação.

// ERRO COMUM:
// Copiar o método para uma variável e achar que "this" continuará sendo o objeto original:
// const acao = usuario.dizerNome;
// acao(); // ERRO CONCEITUAL: "this" perde a referência de "usuario"!

// REGRA:
// Na chamada obj.metodo(), pergunte-se: "quem está imediatamente à esquerda do ponto?".
// Esse é o valor de "this" durante aquela execução.

// Exemplo Prático Executável:
const contaBancaria = {
  titular: "Lucas",
  saldo: 1500,

  exibirSaldo() {
    console.log(`[exercicio-01] Titular: ${this.titular} | Saldo: R$ ${this.saldo}`);
  },

  depositar(valor) {
    this.saldo += valor;
    console.log(`[exercicio-01] Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
  }
};

// Invocação como método: "contaBancaria" está à esquerda do ponto
contaBancaria.exibirSaldo();
contaBancaria.depositar(500);

// Demonstração da perda de contexto (call-site sem referência):
const metodoIsolado = contaBancaria.exibirSaldo;
console.log("[exercicio-01] Chamando método isolado da referência original:");
try {
  metodoIsolado(); // Em modo não-estrito no Node pode imprimir undefined; em strict mode lançará erro.
} catch (erro) {
  console.log(`[exercicio-01] Erro capturado por perda de contexto: ${erro.message}`);
}