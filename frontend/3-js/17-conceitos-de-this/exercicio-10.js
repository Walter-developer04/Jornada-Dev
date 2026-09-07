// ASSUNTO: Function.prototype.bind()

// O que é?
// É um método embutido de Function.prototype que cria e retorna uma NOVA FUNÇÃO
// (chamada de Bound Function ou Função Vinculada). Quando essa nova função é chamada
// posteriormente, ela terá seu valor de "this" permanentemente travado e associado
// ao objeto fornecido no momento do .bind().

// Para que serve?
// Serve para fixar o contexto de execução de uma função para uso POSTERIOR (retardado).
// É a solução clássica para manter o "this" correto ao passar métodos como callbacks
// assíncronos (setTimeout, requisições HTTP, eventos). Também permite fixar previamente
// argumentos iniciais através da técnica de Aplicação Parcial (Currying).

// Sintaxe:
// const novaFuncao = funcaoOriginal.bind(thisArg, arg1, arg2, /* … */)

// Como usar?
// Invoque .bind() sobre a função desejada informando o objeto que deve ser o "this".
// Armazene a função retornada em uma constante/variável ou passe-a diretamente como callback.

// Quando deve usar?
// 1. Quando for passar um método de objeto como callback para setTimeout, setInterval, etc.
// 2. Quando passar manipuladores em arquiteturas baseadas em eventos sem usar arrow functions.
// 3. Ao praticar aplicação parcial (fixar previamente os primeiros argumentos de uma função).

// Por que usar nesses casos?
// Porque o `.bind()` NÃO executa a função de imediato. Ele gera um invólucro com a garantia
// inquebrável de que, não importa quem invoque a função no futuro, o "this" original será respeitado.

// Quando não deve usar?
// 1. Não use se o seu objetivo é executar a função no exato momento da chamada (use call ou apply).
// 2. Em código moderno com arrow functions, muitas vezes () => this.metodo() é mais conciso.

// Por que não deve usar nesses casos?
// Chamar `.bind()` aloca uma nova instância de função na memória (uma bound function exótica).
// Criar funções bound desnecessariamente dentro de loops críticos pode gerar sobrecarga de memória.

// Qual comportamento devo observar?
// O `.bind()` produz uma vinculação permanente ("Hard Binding"). Uma função vinculada por `.bind()`
// NUNCA mais pode ter seu "this" sobrescrito por chamadas posteriores com `.call()`, `.apply()`
// ou mesmo por um novo `.bind()`.

// DIFERENÇA CRUCIAL:
// - call e apply: Executam a função IMEDIATAMENTE e retornam o valor resultante da execução.
// - bind: NÃO executa a função imediatamente; retorna uma NOVA FUNÇÃO pronta para ser chamada.

// ERRO COMUM:
// Fazer "const resultado = minhaFuncao.bind(objeto);" e achar que a função já rodou.
// O bind apenas fabrica a função vinculada, ele NÃO a executa sozinho!

// REGRA:
// Uma vez feito o bind: const boundFn = fn.bind(objA), nem mesmo boundFn.call(objB)
// conseguirá mudar o "this" para objB. O vínculo com objA é definitivo.

// Exemplo Prático Executável:
"use strict";

const usuario = {
  nome: "Clara",
  saudar(saudacao, pontuacao) {
    console.log(`[exercicio-10] ${saudacao}, meu nome é ${this.nome}${pontuacao}`);
  }
};

// 1. Demonstração do problema de perda de contexto:
const metodoSolto = usuario.saudar;
// Se tentássemos: metodoSolto("Olá", "!"); -> Geraria TypeError em strict mode (this é undefined)

// 2. Solução com .bind() — Criação da nova função vinculada:
const saudarClara = usuario.saudar.bind(usuario);

console.log("[exercicio-10] Chamando a nova função vinculada:");
saudarClara("Olá", "!"); // Executa com this === usuario

// 3. Demonstração de Aplicação Parcial de argumentos:
// Fixamos "this" como 'usuario' e o primeiro argumento 'saudacao' como "Bom dia"
const saudarBomDiaClara = usuario.saudar.bind(usuario, "Bom dia");
console.log("\n[exercicio-10] Chamando função com argumento parcialmente aplicado:");
saudarBomDiaClara(" — seja bem-vinda.");

// 4. Demonstração da Imutabilidade da Vinculação (Hard Binding):
const outroUsuario = { nome: "Roberto" };
console.log("\n[exercicio-10] Tentando sobrescrever o 'this' de uma Bound Function com .call():");
saudarClara.call(outroUsuario, "Oi", "..."); // 'outroUsuario' é IGNORADO; imprime Clara!