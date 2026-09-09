/*
  =====================================================================
  EXERCÍCIO 01 — CONSTRUCTOR PARAMS (Parâmetros de Construtor)
  =====================================================================

  O que é:
  O "constructor" é um método especial da classe, executado
  automaticamente no instante em que um objeto é criado com o
  operador "new". Os "constructor params" são os valores que
  passamos entre parênteses nesse momento para que o objeto já
  nasça com um estado inicial definido e válido.

  Para que serve:
  Serve para garantir que todo objeto comece a existir consistente,
  com as propriedades essenciais já preenchidas. Sem construtor,
  teríamos que criar o objeto vazio e preencher cada propriedade
  manualmente, correndo o risco de esquecer algo e deixar o objeto
  em estado inválido. Além disso, os parâmetros do construtor
  permitem REDUZIR CÓDIGO REPETITIVO: com as "parameter properties"
  (modificador escrito direto no parâmetro), o TypeScript declara a
  propriedade e faz a atribuição automaticamente.

  Como usar:
  Forma clássica (explícita):
  1. Declare as propriedades no corpo da classe;
  2. Crie o método "constructor" recebendo parâmetros tipados;
  3. Atribua cada parâmetro à propriedade usando "this".
  Forma encurtada (parameter properties):
  Escreva "public", "private" ou "protected" antes do parâmetro do
  construtor e o TypeScript cria a propriedade e atribui o valor
  automaticamente, sem precisar de "this.x = x".

  Quando usar:
  - Sempre que a classe precisar de valores obrigatórios para
    existir (um Produto sem nome não faz sentido);
  - Quando quiser eliminar a repetição "this.propriedade = valor";
  - Quando valores padrão ou parâmetros opcionais deixarem a
    criação do objeto mais conveniente.

  Quando não usar:
  - Em classes sem estado interno (somente métodos estáticos);
  - Quando a inicialização exigir lógica muito complexa ou muitas
    combinações diferentes: um método de fábrica costuma ser mais
    claro do que um construtor gigante;
  - Quando o objeto puder ser criado vazio sem qualquer problema.
  =====================================================================
*/

// ---------------------------------------------------------------------
// EXEMPLO 1 — SIMPLES: a forma clássica, declarando e atribuindo
// ---------------------------------------------------------------------

class Livro {
  // 1) Propriedades declaradas manualmente
  titulo: string;
  autor: string;
  anoPublicacao: number;

  // 2) O construtor recebe os parâmetros tipados
  constructor(titulo: string, autor: string, anoPublicacao: number) {
    // 3) Cada parâmetro inicializa a propriedade correspondente
    this.titulo = titulo;            // "this.titulo" é a propriedade
    this.autor = autor;              // "autor" (sem this) é o parâmetro
    this.anoPublicacao = anoPublicacao;
  }

  exibirInformacoes(): string {
    return `"${this.titulo}" de ${this.autor} (${this.anoPublicacao})`;
  }
}

const livro = new Livro("Dom Casmurro", "Machado de Assis", 1899);
console.log(livro.exibirInformacoes());
// Saída: "Dom Casmurro" de Machado de Assis (1899)

// ---------------------------------------------------------------------
// EXEMPLO 2 — INTERMEDIÁRIO: parameter properties (menos repetição)
// ---------------------------------------------------------------------

class Produto {
  // Observe: não há propriedades declaradas no corpo da classe.
  // O modificador "public" ANTES do parâmetro declara a propriedade
  // e atribui o valor recebido automaticamente.
  // Resultado: código equivalente ao Exemplo 1, porém bem mais curto.
  constructor(
    public nome: string,
    public preco: number,
    public quantidadeEmEstoque: number = 0 // parâmetro opcional com valor padrão
  ) {}

  calcularTotalEmEstoque(): number {
    return this.preco * this.quantidadeEmEstoque;
  }
}

const teclado = new Produto("Teclado mecânico", 250, 4);
const mouse = new Produto("Mouse sem fio", 90); // usa o valor padrão 0

console.log(`${teclado.nome}: R$ ${teclado.calcularTotalEmEstoque()}`);
// Saída: Teclado mecânico: R$ 1000
console.log(`${mouse.nome}: R$ ${mouse.calcularTotalEmEstoque()}`);
// Saída: Mouse sem fio: R$ 0

// ---------------------------------------------------------------------
// EXEMPLO 3 — PRÁTICO: construtor com validação e proteção de estado
// ---------------------------------------------------------------------

class ContaBancaria {
  // "private": o saldo só pode ser manipulado dentro da própria classe
  private saldo: number;

  constructor(
    public titular: string,     // parameter property: vira propriedade
    saldoInicial: number = 0    // parâmetro comum: NÃO vira propriedade
  ) {
    // O construtor é o lugar ideal para validar o estado inicial
    if (saldoInicial < 0) {
      throw new Error("O saldo inicial não pode ser negativo.");
    }
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      throw new Error("O valor do depósito deve ser positivo.");
    }
    this.saldo += valor;
  }

  obterSaldo(): number {
    return this.saldo;
  }
}

const contaDaAna = new ContaBancaria("Ana");
contaDaAna.depositar(500);
console.log(`Saldo de ${contaDaAna.titular}: R$ ${contaDaAna.obterSaldo()}`);
// Saída: Saldo de Ana: R$ 500

// Graças à validação no construtor, a linha abaixo lançaria erro:
// const contaInvalida = new ContaBancaria("Bruno", -100);

// E graças ao "private", o acesso direto é proibido:
// console.log(contaDaAna.saldo); // ERRO de compilação: saldo é private

export{}