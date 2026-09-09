/*
  =====================================================================
  EXERCÍCIO 05 — METHOD OVERRIDING (Sobrescrita de Métodos)
  =====================================================================

  O que é:
  Method Overriding (sobrescrita de método) acontece quando uma
  classe filha redeclara um método herdado da classe mãe com a
  MESMA assinatura (mesmo nome e mesmos parâmetros), substituindo
  o comportamento herdado por um comportamento especializado.

  Para que serve:
  Serve para especializar comportamento. A mãe define o
  comportamento geral; a filha ajusta o que precisa ser diferente.
  Também permite ESTENDER o comportamento original combinando
  "super.metodo()" com código novo (executa a lógica da mãe E
  ainda faz algo a mais).

  Como usar:
  1. Na classe filha, declare um método com o mesmo nome e a
     mesma assinatura do método da mãe;
  2. Dentro dele, escreva o novo comportamento;
  3. Se quiser reaproveitar a lógica da mãe, chame
     "super.nomeDoMetodo()" no ponto desejado.

  Quando usar:
  - Quando a implementação genérica da mãe não serve para a filha;
  - Quando a filha precisa executar a lógica da mãe E algo a mais;
  - Em hierarquias onde cada especialização tem sua variação.

  Quando não usar:
  - Quando a diferença entre as classes cabe em DADOS, e não em
    comportamento (uma propriedade resolve, sem sobrescrever);
  - Quando a assinatura muda: isso NÃO é overriding, é apenas
    outro método (com outro formato de parâmetros);
  - Quando a filha sobrescreve sem necessidade: método herdado
    bem usado é reutilização de graça.

  ATENÇÃO:
  Overriding (sobrescrita) não é Overloading (sobrecarga).
  Sobrecarga será vista no exercicio-06.ts.
  =====================================================================
*/

// ---------------------------------------------------------------------
// A CLASSE MÃE: comportamento genérico
// ---------------------------------------------------------------------

class Funcionario {
  constructor(public nome: string, public salarioBase: number) {}

  // Comportamento padrão para qualquer funcionário
  public calcularSalario(): number {
    return this.salarioBase;
  }

  public descreverResponsabilidades(): string {
    return `${this.nome} executa as tarefas atribuídas pela equipe.`;
  }
}

// ---------------------------------------------------------------------
// EXEMPLO 1 — SOBRESCRITA COM "super": a filha estende a mãe
// ---------------------------------------------------------------------

class Gerente extends Funcionario {
  constructor(nome: string, salarioBase: number, private bonusDeResultados: number) {
    super(nome, salarioBase);
  }

  // SOBRESCRITA com reaproveitamento:
  // "super" chama o calcularSalario() da mãe e soma o bônus por cima
  public calcularSalario(): number {
    return super.calcularSalario() + this.bonusDeResultados;
  }
}

// ---------------------------------------------------------------------
// EXEMPLO 2 — SOBRESCRITA SEM "super": a filha substitui totalmente
// ---------------------------------------------------------------------

class Estagiario extends Funcionario {
  constructor(nome: string, salarioBase: number, private horasDeApoio: number) {
    super(nome, salarioBase);
  }

  // NÃO sobrescreve calcularSalario(): usa o método herdado da mãe

  // Sobrescreve apenas o que realmente precisa mudar,
  // ignorando completamente a versão da mãe (sem "super")
  public descreverResponsabilidades(): string {
    return `${this.nome} apoia a equipe em atividades de aprendizado (${this.horasDeApoio}h semanais).`;
  }
}

class GerenteDeProjetos extends Gerente {
  constructor(nome: string, salarioBase: number, bonusDeResultados: number) {
    super(nome, salarioBase, bonusDeResultados);
  }

  // Sobrescreve por cima da SOBRESCRITA do Gerente:
  // a cadeia de herança permite sobrescrever em vários níveis
  public calcularSalario(): number {
    // super aqui refere-se ao calcularSalario() do Gerente
    return super.calcularSalario() + 500; // verba de coordenação
  }
}

// ---------------------------------------------------------------------
// DEMONSTRAÇÃO: método herdado x método sobrescrito
// ---------------------------------------------------------------------

const funcionario = new Funcionario("Renata", 3000);
const gerente = new Gerente("Marcos", 8000, 2000);
const estagiario = new Estagiario("Julia", 1200, 20);
const gerenteDeProjetos = new GerenteDeProjetos("Patricia", 7000, 1500);

// calcularSalario() herdado (sem sobrescrever):
console.log(funcionario.calcularSalario());
// Saída: 3000  <- comportamento da mãe, reaproveitado

// calcularSalario() sobrescrito (com "super" estendendo):
console.log(gerente.calcularSalario());
// Saída: 10000 <- 8000 (base via super) + 2000 (bônus)

// calcularSalario() herdado SEM mudança nenhuma:
console.log(estagiario.calcularSalario());
// Saída: 1200  <- mesmo método da mãe, ganho de graça

// Sobrescrita em cadeia (filha de filha):
console.log(gerenteDeProjetos.calcularSalario());
// Saída: 9000  <- 7000 + 1500 (Gerente) + 500 (GerenteDeProjetos)

// descreverResponsabilidades(): herdado x sobrescrito
console.log(funcionario.descreverResponsabilidades());
// Saída: Renata executa as tarefas atribuídas pela equipe.
console.log(estagiario.descreverResponsabilidades());
// Saída: Julia apoia a equipe em atividades de aprendizado (20h semanais).

// ---------------------------------------------------------------------
// RESUMO
// ---------------------------------------------------------------------
// - Sobrescreveu SEM "super": substituiu o comportamento da mãe;
// - Sobrescreveu COM "super": executou a mãe E acrescentou algo;
// - Não sobrescreveu: herdou e reutilizou sem escrever nada.
