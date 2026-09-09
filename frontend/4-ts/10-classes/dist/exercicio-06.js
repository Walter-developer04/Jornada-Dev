"use strict";
/*
  =====================================================================
  EXERCÍCIO 06 — CONSTRUCTOR OVERLOADING (Sobrecarga de Construtor)
  =====================================================================

  O que é:
  Sobrecarga de construtor é a possibilidade de uma classe ser
  construída de formas DIFERENTES, com conjuntos de parâmetros
  diferentes.

  PONTO CRUCIAL DO TYPESCRIPT (funcionamento real da linguagem):
  Diferente de Java ou C#, o TypeScript NÃO permite escrever dois
  blocos "constructor" na mesma classe. A forma correta aqui é:
  1. Declarar VÁRIAS ASSINATURAS de sobrecarga (apenas a lista de
     parâmetros, SEM corpo, terminando em ponto e vírgula);
  2. Escrever UMA ÚNICA implementação logo abaixo, cuja assinatura
     precisa ser compatível com todas as sobrecargas anunciadas.
  As assinaturas de sobrecarga existem apenas para o compilador
  (autocompletar e checagem de tipos); em tempo de execução existe
  um único construtor de verdade.

  Para que serve:
  Serve para oferecer formas convenientes de criar o objeto: por
  exemplo, criar uma Coordenada a partir de dois números OU a
  partir de um texto pronto. Quem usa a classe ganha flexibilidade
  sem perder a checagem de tipos.

  Como usar:
  1. Escreva as assinaturas de sobrecarga (sem corpo) antes da
     implementação;
  2. Implemente UM constructor cobrindo todas as combinações com
     parâmetros opcionais e/ou tipos de união;
  3. Dentro do corpo, identifique os argumentos (typeof, valores
     definidos) para decidir o caminho de inicialização.

  Quando usar:
  - Quando a classe admite mais de uma forma natural de criação;
  - Quando você quer que o compilador exija combinações corretas
    de parâmetros já na escrita do código.

  Quando não usar:
  - Quando parâmetros opcionais com valores padrão resolvem de
    forma simples (uma assinatura basta);
  - Quando há muitas variações confusas: um método de fábrica
    estático costuma ser mais legível;
  - Em classes com uma única forma de construção.
  =====================================================================
*/
// ---------------------------------------------------------------------
// EXEMPLO 1 — SIMPLES: sobrecarga com parâmetro opcional
// ---------------------------------------------------------------------
class Musica {
    titulo;
    artista;
    duracaoSegundos;
    // Implementação ÚNICA: precisa aceitar todas as formas acima
    constructor(titulo, artista, duracaoSegundos) {
        this.titulo = titulo;
        this.artista = artista;
        // se a duração não veio, usamos um padrão (180 segundos)
        this.duracaoSegundos = duracaoSegundos === undefined ? 180 : duracaoSegundos;
    }
    exibirDuracao() {
        const minutos = Math.floor(this.duracaoSegundos / 60);
        const segundos = this.duracaoSegundos % 60;
        return `${this.titulo} (${this.artista}): ${minutos}min ${segundos}s`;
    }
}
const musicaCurta = new Musica("Garota de Ipanema", "Tom Jobim");
const musicaCompleta = new Musica("Bohemian Rhapsody", "Queen", 354);
console.log(musicaCurta.exibirDuracao());
// Saída: Garota de Ipanema (Tom Jobim): 3min 0s
console.log(musicaCompleta.exibirDuracao());
// Saída: Bohemian Rhapsody (Queen): 5min 54s
// A checagem de tipos impede combinações inválidas:
// new Musica("Aquarela", "Toquinho", "seis minutos");
// ERRO: a terceira sobrecarga exige number, não string
// ---------------------------------------------------------------------
// EXEMPLO 2 — INTERMEDIÁRIO: sobrecarga com TIPOS diferentes
// ---------------------------------------------------------------------
class Coordenada {
    latitude;
    longitude;
    descricao;
    // Implementação: o primeiro argumento pode ser número OU texto
    constructor(entrada, longitude) {
        if (typeof entrada === "string") {
            // caminho da forma 2: dividimos o texto
            const partes = entrada.split(",");
            this.latitude = Number(partes[0]);
            this.longitude = Number(partes[1]);
            this.descricao = `criada a partir do texto "${entrada}"`;
        }
        else {
            // caminho da forma 1: números direto
            this.latitude = entrada;
            this.longitude = longitude;
            this.descricao = "criada a partir de números";
        }
    }
    exibir() {
        return `(${this.latitude}, ${this.longitude}) — ${this.descricao}`;
    }
}
const porNumeros = new Coordenada(-23.55, -46.63);
const porTexto = new Coordenada("-23.55,-46.63");
console.log(porNumeros.exibir());
// Saída: (-23.55, -46.63) — criada a partir de números
console.log(porTexto.exibir());
// Saída: (-23.55, -46.63) — criada a partir do texto "-23.55,-46.63"
// Chamadas inválidas são rejeitadas já na compilação:
// new Coordenada(true); // ERRO: não existe sobrecarga para boolean
// ---------------------------------------------------------------------
// EXEMPLO 3 — PRÁTICO: duas formas de criar um Retângulo
// ---------------------------------------------------------------------
class Retangulo {
    base;
    altura;
    // Implementação única: altura opcional
    constructor(base, altura) {
        this.base = base;
        // sem altura informada, usamos a própria base (quadrado)
        this.altura = altura === undefined ? base : altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
const quadrado = new Retangulo(5);
const tapete = new Retangulo(5, 3);
console.log(`Área do quadrado: ${quadrado.calcularArea()}`);
// Saída: Área do quadrado: 25
console.log(`Área do tapete: ${tapete.calcularArea()}`);
// Saída: Área do tapete: 15
// ---------------------------------------------------------------------
// RESUMO
// ---------------------------------------------------------------------
// 1. TypeScript aceita UM ÚNICO bloco constructor implementado;
// 2. As assinaturas de sobrecarga (sem corpo) anunciam as formas
//    válidas de chamar o "new";
// 3. A implementação usa parâmetros opcionais (?) e/ou uniões (|)
//    para cobrir todas as formas anunciadas;
// 4. O "typeof" e comparações com "undefined" decidem o caminho
//    dentro do corpo do construtor.
