// ASSUNTO: Function.prototype.call()

// O que é?
// É um método embutido no protótipo de todas as funções JavaScript que permite
// invocar uma função especificando explicitamente o valor que será atribuído
// a "this" e passando os argumentos da função individualmente, separados por vírgula.

// Para que serve?
// Serve para executar imediatamente uma função vinculando-a a um contexto arbitrário,
// sendo a forma padrão de vinculação explícita quando a quantidade de argumentos é conhecida
// e fixa.

// Sintaxe:
// funcao.call(thisArg, arg1, arg2, /* …, */ argN)

// Como usar?
// Passe o objeto que você quer que represente "this" como o primeiro argumento.
// Os argumentos subsequentes serão entregues diretamente aos parâmetros correspondentes da função.

// Quando deve usar?
// Quando você já tem os argumentos individuais à disposição e deseja invocar
// imediatamente a função sobre um objeto específico.

// Por que usar nesses casos?
// A sintaxe com argumentos separados por vírgula é direta, intuitiva e dispensa
// a criação de arrays intermediários.

// Quando não deve usar?
// 1. Não use se os seus argumentos já estiverem agrupados dentro de um array ou lista dinâmica
//    (nesse caso, antigamente usava-se `apply`; hoje em dia também se usa `call` com spread `...args`).
// 2. Não use se você precisa apenas preparar a função para ser disparada no futuro (use `bind`).

// Por que não usar nesses casos?
// Chamar `.call()` executa a função IMEDIATAMENTE no exato momento da linha de código.
// Se você passar `call()` para um callback de evento ou setTimeout, a função rodará na hora,
// antes do evento acontecer.

// Qual comportamento devo observar?
// A função executa no mesmo instante, com "this" apontando para o primeiro parâmetro fornecido.

// ATENÇÃO:
// Se nenhum `thisArg` for passado, ou for passado `undefined`/`null`, em modo não-estrito
// "this" assumirá o objeto global. Em modo estrito, manterá o valor literal passado.

// ERRO COMUM:
// Esquecer que `call` executa imediatamente e tentar usá-lo onde se esperava um callback:
// setTimeout(minhaFuncao.call(meuObjeto), 1000); // ERRO! Executa instantaneamente.

// REGRA:
// Lembre-se do mnemônico: "C de Call = C de Comma (vírgula)".
// Argumentos passados com vírgula: funcao.call(alvo, a, b, c).

// Exemplo Prático Executável:
"use strict";

function apresentarProduto(desconto, moeda) {
  const precoFinal = this.preco - desconto;
  console.log(`[exercicio-08] Item: ${this.nome} | De: ${moeda} ${this.preco} por ${moeda} ${precoFinal}`);
}

const notebook = {
  nome: "Notebook Pro 16",
  preco: 8000
};

const smartphone = {
  nome: "Smartphone Ultra",
  preco: 4500
};

console.log("[exercicio-08] Executando com .call() sobre 'notebook':");
// 'notebook' torna-se o this; 1000 vai para 'desconto'; "R$" vai para 'moeda'
apresentarProduto.call(notebook, 1000, "R$");

console.log("\n[exercicio-08] Executando com .call() sobre 'smartphone':");
apresentarProduto.call(smartphone, 500, "R$");