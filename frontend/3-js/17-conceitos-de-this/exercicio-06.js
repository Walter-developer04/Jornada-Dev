// ASSUNTO: Empréstimo de Funções / Function Borrowing

// O que é?
// É um padrão em JavaScript no qual um objeto utiliza (toma emprestado) um método
// pertencente a outro objeto ou a um protótipo, executando-o como se fosse seu próprio método,
// sem precisar duplicar código ou estabelecer herança formal (prototípica ou por classes).

// Para que serve?
// Serve para reaproveitar lógica existente entre estruturas de dados que possuem
// propriedades compatíveis, economizando memória e evitando acoplamento desnecessário
// através de herança rígida.

// Sintaxe:
// objetoDoador.metodo.call(objetoTomador, arg1, arg2);
// ou
// objetoDoador.metodo.apply(objetoTomador, [args]);

// Como usar?
// Localize o método que contém a lógica desejada e execute-o sobre o objeto de destino
// redirecionando o "this" por meio de .call() ou .apply().

// Quando deve usar?
// 1. Quando dois objetos distintos possuem formatos semelhantes (ex: ambos têm 'nome' e 'sobrenome').
// 2. Historicamente muito usado para converter objetos semelhantes a array (como "arguments"
//    ou NodeLists) usando métodos de Array: Array.prototype.slice.call(arguments).

// Por que usar nesses casos?
// Porque é uma solução flexível e rápida que segue o princípio de composição sobre herança.
// Se um objeto sabe formatar nomes, qualquer outro objeto com propriedades compatíveis pode se beneficiar.

// Quando não deve usar?
// Quando a lógica do método for altamente acoplada a particularidades internas do objeto doador
// que o objeto tomador não possui, ou quando métodos nativos modernos forem mais diretos
// (ex: prefira Array.from() ou spread operator [...] em vez de emprestar slice de Array).

// Por que não deve usar nesses casos?
// Emprestar métodos esperando propriedades que o objeto de destino não possui gerará
// saídas como "undefined" ou causará erros em tempo de execução.

// Qual comportamento devo observar?
// O método executa normalmente, mas quando ele lê "this.propriedade", ele lê os dados
// do objeto tomador (o que foi passado no primeiro argumento de call/apply).

// ATENÇÃO:
// O objeto tomador NÃO herda permanentemente o método. O empréstimo ocorre única
// e exclusivamente durante aquela invocação específica.

// ERRO COMUM:
// Emprestar um método que depende de métodos auxiliares internos que o objeto tomador
// não possui implementados.

// REGRA:
// Function Borrowing só funciona perfeitamente porque o valor de "this" em funções
// tradicionais é dinâmico e pode ser redefinido explicitamente no momento da chamada.

// Exemplo Prático Executável:

// Objeto 1: Possui o método complexo de formatação
const funcionario = {
  nome: "Carlos",
  sobrenome: "Silva",
  cargo: "Analista de Sistemas",
  obterApresentacao(prefixo) {
    return `${prefixo} ${this.nome} ${this.sobrenome} — Cargo: ${this.cargo}`;
  }
};

// Objeto 2: Não possui o método, mas tem propriedades compatíveis
const cliente = {
  nome: "Marina",
  sobrenome: "Albuquerque",
  cargo: "Cliente Especial"
};

// Execução normal no objeto dono:
console.log("[exercicio-06] Invocação original:");
console.log(funcionario.obterApresentacao("Colaborador:"));

// Empréstimo de função via .call():
// O método de 'funcionario' é executado tendo 'cliente' como o seu "this"
console.log("\n[exercicio-06] Function Borrowing em ação:");
const apresentacaoCliente = funcionario.obterApresentacao.call(cliente, "Prezada:");
console.log(apresentacaoCliente);

// Exemplo clássico com objeto similar a array (arguments-like):
const objetoSimilarArray = {
  0: "Primeiro item",
  1: "Segundo item",
  length: 2
};

// Emprestando o método join do Array.prototype:
const resultadoJoin = Array.prototype.join.call(objetoSimilarArray, " <---> ");
console.log("\n[exercicio-06] Array.prototype.join emprestado para objeto similar a array:");
console.log(resultadoJoin);