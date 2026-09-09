"use strict";
/*
  =====================================================================
  EXERCÍCIO 02 — ACCESS MODIFIERS (Modificadores de Acesso)
  =====================================================================

  O que é:
  Modificadores de acesso são palavras-chave que controlam QUEM
  pode ler ou modificar propriedades e métodos de uma classe.
  O TypeScript possui três principais:
  - "public":    acessível de qualquer lugar (é o padrão quando
                 nada é escrito);
  - "private":   acessível apenas dentro da própria classe;
  - "protected": acessível dentro da própria classe e também
                 dentro de classes derivadas (filhas).

  Para que serve:
  Serve para proteger o estado interno do objeto. A ideia central
  é: quem usa a classe não precisa (e não deve) mexer diretamente
  nos detalhes internos. Se o saldo de uma conta pudesse ser
  alterado de fora, qualquer código poderia fazer
  "conta.saldo = 1000000". Com "private", o saldo só muda através
  de métodos que aplicam as regras do negócio (taxas, verificações).

  Como usar:
  Escreva o modificador antes do nome da propriedade ou do método,
  tanto nas propriedades declaradas no corpo da classe quanto nos
  parâmetros do construtor (parameter properties).

  Quando usar:
  - "private"   para dados internos que devem ser protegidos;
  - "protected" para membros que fazem sentido para as classes
                 filhas, mas não para o mundo externo;
  - "public"    para a "porta de entrada" da classe: as operações
                 que os outros objetos podem executar.

  Quando não usar:
  - Não esconda tudo por hábito: se um valor é inofensivo e útil
    publicamente, deixe "public";
  - Não use "protected" para contornar regras: se a classe filha
    precisa de um dado privado da mãe, o design merece revisão;
  - Em scripts pequenos e descartáveis, o excesso de proteção
    pode virar burocracia sem benefício.
  =====================================================================
*/
// ---------------------------------------------------------------------
// EXEMPLO 1 — SIMPLES: os três modificadores na mesma classe
// ---------------------------------------------------------------------
class ContaBancaria {
    // "public" é o padrão; escrevemos apenas para deixar a intenção clara
    titular;
    // "private": invisível fora desta classe
    saldo;
    // "protected": invisível fora, mas visível para classes filhas
    taxaDeSaque;
    constructor(titular, saldoInicial, taxaDeSaque) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.taxaDeSaque = taxaDeSaque;
    }
    // Método "public": qualquer código pode chamar
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("O depósito deve ser positivo.");
        }
        this.saldo += valor; // dentro da classe, "private" é liberado
    }
    sacar(valor) {
        // A regra de negócio (taxa + verificação) vive aqui dentro
        const valorComTaxa = valor * (1 + this.taxaDeSaque);
        if (valorComTaxa > this.saldo) {
            return false; // saldo insuficiente
        }
        this.saldo -= valorComTaxa;
        return true;
    }
    // Leitura controlada: o mundo externo VÊ o saldo, mas não ALTERA
    obterSaldo() {
        return this.saldo;
    }
}
// ---------------------------------------------------------------------
// Acessando de FORA da classe
// ---------------------------------------------------------------------
const conta = new ContaBancaria("Beatriz", 1000, 0.05);
// "public" liberado de fora:
console.log(`Titular: ${conta.titular}`);
// Saída: Titular: Beatriz
// "private" bloqueado de fora (as linhas abaixo NÃO compilam):
// conta.saldo = 999999;         // ERRO: 'saldo' é privado
// console.log(conta.saldo);     // ERRO: 'saldo' é privado
// O caminho correto passa pelos métodos públicos:
conta.depositar(300);
console.log(conta.sacar(200)); // true (200 + taxa de 5% = 210)
console.log(`Saldo final: R$ ${conta.obterSaldo()}`);
// Saída: Saldo final: R$ 1090
// ---------------------------------------------------------------------
// EXEMPLO 2 — INTERMEDIÁRIO: "protected" na prática (com herança)
// ---------------------------------------------------------------------
class ContaPoupanca extends ContaBancaria {
    rendimentoPercentual;
    constructor(titular, saldoInicial) {
        // "super" chama o construtor da classe mãe
        super(titular, saldoInicial, 0.02); // taxa menor para poupança
        this.rendimentoPercentual = 0.005;
    }
    aplicarRendimento() {
        // "protected" permite à classe filha usar a taxa da mãe
        const saldoAtual = this.obterSaldo();
        const rendimento = saldoAtual * this.rendimentoPercentual;
        this.depositar(rendimento);
        // Já "private" continua PROIBIDO, mesmo aqui dentro da filha:
        // this.saldo += 100; // ERRO: 'saldo' é privado da classe mãe
    }
    exibirTaxa() {
        // acesso permitido porque a propriedade é "protected"
        return `Taxa de saque da poupança: ${(this.taxaDeSaque * 100).toFixed(1)}%`;
    }
}
const poupanca = new ContaPoupanca("Carlos", 2000);
poupanca.aplicarRendimento();
console.log(poupanca.exibirTaxa());
// Saída: Taxa de saque da poupança: 2.0%
console.log(`Saldo com rendimento: R$ ${poupanca.obterSaldo()}`);
// Saída: Saldo com rendimento: R$ 2010
// E de fora da hierarquia?
// console.log(poupanca.taxaDeSaque); // ERRO: 'protected' não é público
// ---------------------------------------------------------------------
// EXEMPLO 3 — PRÁTICO: parameter properties com modificadores
// ---------------------------------------------------------------------
class Aluno {
    nome;
    mediaFinal;
    matriculaAtiva;
    // O modificador no parâmetro declara E protege a propriedade
    constructor(nome, mediaFinal, matriculaAtiva) {
        this.nome = nome;
        this.mediaFinal = mediaFinal;
        this.matriculaAtiva = matriculaAtiva;
    }
    // o mundo externo só consegue a informação por métodos públicos
    obterSituacao() {
        return this.mediaFinal >= 6
            ? `${this.nome}: aprovado`
            : `${this.nome}: reprovado`;
    }
}
const aluno = new Aluno("Fernanda", 8.5, true);
console.log(aluno.obterSituacao());
// Saída: Fernanda: aprovado
// aluno.mediaFinal = 10;   // ERRO: 'mediaFinal' é privado
// aluno.matriculaAtiva;    // ERRO fora da hierarquia: 'protected'
// ---------------------------------------------------------------------
// RESUMO
// ---------------------------------------------------------------------
// | Modificador  | Na própria classe | Na classe filha | Fora da classe |
// |--------------|-------------------|------------------|-----------------|
// | public       | sim               | sim              | sim             |
// | protected    | sim               | sim              | não             |
// | private      | sim               | não              | não             |
