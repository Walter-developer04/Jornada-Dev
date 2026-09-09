"use strict";
/*
  =====================================================================
  EXERCÍCIO 04 — INHERITANCE vs POLYMORPHISM
  (Herança versus Polimorfismo)
  =====================================================================

  O que é:
  HERANÇA (Inheritance): mecanismo pelo qual uma classe (a filha,
  subclasse ou classe derivada) obtém as propriedades e os métodos
  de outra classe (a mãe, superclasse ou classe base) usando a
  palavra-chave "extends". O foco da herança é ESTRUTURA e
  REUTILIZAÇÃO: a filha ganha o que a mãe tem.

  POLIMORFISMO: capacidade de uma mesma chamada de método gerar
  comportamentos DIFERENTES, dependendo do tipo REAL do objeto em
  tempo de execução. O foco do polimorfismo é COMPORTAMENTO:
  uma mesma forma de chamar, muitas respostas ("poli" = muitas,
  "morfé" = forma).

  Para que serve:
  A herança serve para eliminar duplicação e modelar relações do
  tipo "é um" (um Carro É UM Veículo). O polimorfismo serve para
  escrever código genérico que funciona para toda a família de
  classes: o mesmo laço, a mesma função, sem "ifs" perguntando
  qual é o tipo concreto do objeto.

  Como usar:
  Herança: "class Carro extends Veiculo { ... }" e a chamada de
  "super(...)" no construtor da filha.
  Polimorfismo: as filhas sobrescrevem um método da mãe e o código
  consumidor trata os objetos pelo tipo da mãe
  (por exemplo, "veiculo.mover()").

  Quando usar:
  Herança: quando existe uma relação "é um" clara e verdadeira
  entre as classes.
  Polimorfismo: quando várias classes compartilham a mesma
  operação nominal, mas cada uma a executa de um jeito.

  Quando não usar:
  Não use herança apenas para reaproveitar código quando não há
  relação real entre as classes (composição costuma ser melhor).
  Não force o polimorfismo quando uma simples diferença de dados
  (uma propriedade) resolveria o problema.

  DIFERENÇA ESSENCIAL (não são sinônimos!):
  - A HERANÇA é a ligação estrutural entre as classes (o "cabide");
  - O POLIMORFISMO é o comportamento que varia conforme quem está
    pendurado no cabide (a "roupa" que muda).
  A herança é um dos caminhos que PERMITE o polimorfismo, mas é
  possível herdar sem sobrescrever nada (só herança) e existir
  polimorfismo sem herança de classes (via interfaces).
  =====================================================================
*/
// =====================================================================
// PARTE 1 — HERANÇA: a classe mãe define, as filhas aproveitam
// =====================================================================
class Veiculo {
    marca;
    ano;
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
    // Comportamento padrão, genérico
    mover() {
        return `${this.marca} se desloca de forma genérica.`;
    }
}
// A filha herda marca/ano/mover() e ainda adiciona algo novo
class Carro extends Veiculo {
    quantidadeDePortas;
    constructor(marca, ano, quantidadeDePortas) {
        super(marca, ano); // "super" reaproveita o construtor da mãe
        this.quantidadeDePortas = quantidadeDePortas;
    }
    // Método NOVO: não existe na mãe (extensão de estrutura)
    abrirPortaMalas() {
        return `${this.marca}: porta-malas aberto.`;
    }
}
const carro = new Carro("Honda", 2022, 4);
console.log(carro.mover());
// Saída: Honda se desloca de forma genérica.
// -> O Carro NÃO sobrescreveu nada: ele simplesmente HERDOU o
//    método mover() pronto da mãe. Isso é herança pura.
console.log(carro.abrirPortaMalas());
// Saída: Honda: porta-malas aberto.
// =====================================================================
// PARTE 2 — POLIMORFISMO: mesma chamada, comportamentos distintos
// =====================================================================
// Agora as filhas SOBRESCREVEM mover() (mesma assinatura, corpo novo)
class Moto extends Veiculo {
    constructor(marca, ano) {
        super(marca, ano);
    }
    mover() {
        return `${this.marca} corta o trânsito entre os carros.`;
    }
}
class Barco extends Veiculo {
    constructor(marca, ano) {
        super(marca, ano);
    }
    mover() {
        return `${this.marca} navega sobre a água.`;
    }
}
class Trem extends Veiculo {
    constructor(marca, ano) {
        super(marca, ano);
    }
    mover() {
        return `${this.marca} desliza sobre os trilhos.`;
    }
}
// O truque do polimorfismo: variáveis do tipo da MÃE guardando FILHAS
const frota = [
    new Moto("Yamaha", 2023),
    new Barco("Azimut", 2021),
    new Trem("Alstom", 2020),
    carro, // o Carro que herdou mover() sem sobrescrever
];
// UM único laço, UMA única chamada .mover()...
for (const veiculo of frota) {
    console.log(veiculo.mover());
}
// Saída:
// Yamaha corta o trânsito entre os carros.
// Azimut navega sobre a água.
// Alstom desliza sobre os trilhos.
// Honda se desloca de forma genérica.
// -> Cada objeto respondeu conforme o SEU tipo real:
//    isso é POLIMORFISMO em ação.
// Funções também ficam genéricas: aceitam qualquer Veiculo
function simularPartida(veiculo) {
    // não sabemos (nem precisamos saber) qual é a classe concreta
    return `Partindo... ${veiculo.mover()}`;
}
console.log(simularPartida(new Moto("Suzuki", 2019)));
// Saída: Partindo... Suzuki corta o trânsito entre os carros.
console.log(simularPartida(new Barco("Schaefer", 2018)));
// Saída: Partindo... Schaefer navega sobre a água.
// =====================================================================
// RESUMO DA DIFERENÇA
// =====================================================================
// HERANÇA (estrutura):
//   Carro ganhou marca, ano, mover() e o construtor de Veiculo
//   sem escrever nada disso de novo. Reutilização de código.
//
// POLIMORFISMO (comportamento):
//   A MESMA chamada "veiculo.mover()" produziu frases diferentes
//   para Moto, Barco, Trem e Carro, sem nenhum "if" de tipo.
//
// A herança conecta as classes; o polimorfismo faz a mesma
// mensagem gerar respostas diferentes em tempo de execução.
