"use strict";
/*
  =====================================================================
  EXERCÍCIO 03 — ABSTRACT CLASSES (Classes Abstratas)
  =====================================================================

  O que é:
  Uma "abstract class" é uma classe incompleta, pensada para ser
  apenas um MODELO para outras classes. Ela pode conter:
  - métodos concretos: já implementados, herdados normalmente;
  - métodos abstratos: apenas a assinatura, SEM implementação,
    que obrigatoriamente serão implementados pelas classes filhas.
  A característica decisiva: uma classe abstrata NÃO PODE ser
  instanciada com "new". Ela existe somente para ser estendida.

  Para que serve:
  Serve para definir um contrato parcial com código compartilhado.
  Quando várias classes parecidas (Retângulo, Círculo, Triângulo)
  precisam da mesma estrutura (nome, exibirResumo) mas calculam
  coisas de formas diferentes (calcularArea), a classe abstrata
  centraliza o que é comum e OBRIGA cada filha a implementar o
  que é específico. Assim, nenhuma filha "esquece" de calcular a
  área: o compilador exige.

  Como usar:
  1. Escreva "abstract class NomeDaClasse { ... }";
  2. Marque com "abstract" os métodos que as filhas devem
     implementar (apenas assinatura, sem corpo);
  3. As classes filhas usam "extends" e implementam TODOS os
     métodos abstratos;
  4. Instancie apenas as classes filhas.

  Quando usar:
  - Quando existe uma família de classes com parte comum e parte
    obrigatoriamente variável;
  - Quando você quer impedir a instância da classe genérica;
  - Quando vale a pena compartilhar código entre as filhas.

  Quando não usar:
  - Quando você só precisa de um contrato, sem código
    compartilhado: uma "interface" é mais leve;
  - Quando a classe faz sentido sozinha (não há especializações);
  - Quando apenas uma classe implementaria o comportamento.
  =====================================================================
*/
// ---------------------------------------------------------------------
// A CLASSE ABSTRATA: modelo incompleto, não pode ser instanciada
// ---------------------------------------------------------------------
class FormaGeometrica {
    nome;
    // Construtor normal: as filhas chamam com "super(...)"
    constructor(nome) {
        this.nome = nome;
    }
    // MÉTODO CONCRETO: já vem pronto para todas as filhas
    exibirResumo() {
        // Detalhe importante: aqui chamamos métodos abstratos.
        // Cada filha responderá com a SUA implementação.
        return `${this.nome} | área: ${this.calcularArea().toFixed(2)} | perímetro: ${this.calcularPerimetro().toFixed(2)}`;
    }
}
// ---------------------------------------------------------------------
// EXEMPLO 1 — SIMPLES: uma classe derivada cumprindo o contrato
// ---------------------------------------------------------------------
class Retangulo extends FormaGeometrica {
    base;
    altura;
    constructor(base, altura) {
        super("Retângulo"); // alimenta o construtor da classe abstrata
        this.base = base;
        this.altura = altura;
    }
    // Implementações obrigatórias exigidas pelo "abstract"
    calcularArea() {
        return this.base * this.altura;
    }
    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}
const retangulo = new Retangulo(4, 3);
console.log(retangulo.exibirResumo());
// Saída: Retângulo | área: 12.00 | perímetro: 14.00
// ---------------------------------------------------------------------
// EXEMPLO 2 — INTERMEDIÁRIO: outra filha, outra implementação
// ---------------------------------------------------------------------
class Circulo extends FormaGeometrica {
    raio;
    constructor(raio) {
        super("Círculo");
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
const circulo = new Circulo(2);
console.log(circulo.exibirResumo());
// Saída: Círculo | área: 12.57 | perímetro: 12.57
// ---------------------------------------------------------------------
// EXEMPLO 3 — PRÁTICO: a classe abstrata como tipo comum
// ---------------------------------------------------------------------
// A classe abstrata NÃO gera objetos:
// const forma = new FormaGeometrica("Forma");
// ERRO de compilação: não é possível instanciar uma classe abstrata
// ...mas funciona perfeitamente como TIPO:
const formas = [
    retangulo,
    circulo,
    new Retangulo(10, 5),
];
for (const forma of formas) {
    // exibirResumo() é herdado (concreto), enquanto
    // calcularArea()/calcularPerimetro() variam conforme a filha
    console.log(forma.exibirResumo());
}
// Saída:
// Retângulo | área: 12.00 | perímetro: 14.00
// Círculo | área: 12.57 | perímetro: 12.57
// Retângulo | área: 50.00 | perímetro: 30.00
// ---------------------------------------------------------------------
// RESUMO
// ---------------------------------------------------------------------
// - Classe abstrata = molde incompleto: nunca "new", sempre "extends";
// - Método concreto = herdado pronto (exibirResumo);
// - Método abstrato = obrigação imposta às filhas (calcularArea);
// - O compilador garante que nenhuma filha esqueça o contrato.
