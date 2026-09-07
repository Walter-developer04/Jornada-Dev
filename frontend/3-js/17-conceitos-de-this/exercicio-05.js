// ASSUNTO: this em Funções de Seta / Arrow Functions (Vinculação Léxica)

// O que é?
// Uma arrow function (introduzida no ECMAScript 2015 / ES6) NÃO cria sua própria
// vinculação interna para a palavra-chave "this". Em vez disso, ela resolve "this"
// de forma puramente léxica — procurando o valor de "this" no escopo que a envolve
// no momento em que ela foi escrita no código fonte.

// Para que serve?
// Serve para resolver de forma limpa o problema histórico de callbacks internos
// (como em setTimeout, forEach, map e Promises) que perdiam o contexto do objeto
// que os englobava quando usavam funções tradicionais.

// Sintaxe:
// const arrow = () => {
//   console.log(this); // Utiliza o "this" do escopo onde a arrow foi criada
// };

// Como usar?
// Utilize arrow functions dentro de métodos ou construtores quando precisar passar callbacks
// que precisem acessar as propriedades da instância superior sem recorrer a truques
// como "const self = this" ou chamadas adicionais de ".bind(this)".

// Quando deve usar?
// Em callbacks internos, manipuladores assíncronos e transformações funcionais
// que devem preservar a referência do objeto superior.

// Por que usar nesses casos?
// Porque o "this" léxico é imutável dentro da arrow function, evitando que a invocação
// posterior por terceiros redefina o "this" para outro valor indesejado.

// Quando não deve usar?
// 1. Como métodos principais diretos de um objeto literal (obj = { metodo: () => {} }).
// 2. Como funções construtoras com "new" (arrow functions não possuem construtor).
// 3. Em métodos de prototype.

// Por que não deve usar nesses casos?
// Em objetos literais, as chaves {} NÃO criam um escopo de bloco léxico para "this".
// Logo, uma arrow function declarada como método capturará o "this" do contexto global/módulo,
// e não o objeto literal que a contém.

// Qual comportamento devo observar?
// Tentativas de alterar o "this" de uma arrow function usando .call(), .apply() ou .bind()
// são sumariamente IGNORADAS pelo interpretador. O primeiro argumento passado é descartado.

// ATENÇÃO CRUCIAL:
// NÃO diga que "arrow functions não possuem this". A formulação correta é:
// "Arrow functions não criam uma nova vinculação própria de this; elas capturam
// o this do escopo léxico envolvente".

// ERRO COMUM:
// Criar método de objeto com arrow function e esperar que "this" seja o objeto:
// const usuario = {
//   nome: "Clara",
//   falar: () => console.log(this.nome) // ERRO: this.nome será undefined!
// };

// REGRA:
// O valor de "this" de uma arrow function é fixado estaticamente no momento da escrita
// e corresponde exatamente ao "this" do escopo que a continha imediatamente.

// Exemplo Prático Executável:
const cronometro = {
  segundos: 0,

  // Método tradicional: possui vinculação implícita com "cronometro"
  iniciar() {
    console.log(`[exercicio-05] Início: this aponta para o cronômetro (segundos: ${this.segundos})`);

    // Callback com Arrow Function:
    // Captura o "this" léxico do método "iniciar" (que é o objeto cronometro)
    const tick = () => {
      this.segundos++;
      console.log(`[exercicio-05] Arrow callback preservou this! Segundos: ${this.segundos}`);
    };

    tick();
    tick();

    // Imutabilidade de vinculação da Arrow Function:
    const outroObjeto = { segundos: 999 };
    tick.call(outroObjeto); // O 'outroObjeto' é solenemente IGNORADO
    console.log(`[exercicio-05] Após tick.call(outroObjeto), segundos continuam no objeto original: ${this.segundos}`);
  },

  // ERRO COMUM DEMONSTRADO: Método direto declarado como arrow
  exibirComErro: () => {
    // Aqui "this" NÃO é o objeto cronometro, mas sim o escopo externo (módulo Node ou window)
    console.log(`[exercicio-05] Arrow como método direto -> this.segundos é:`, this.segundos);
  }
};

cronometro.iniciar();
cronometro.exibirComErro();