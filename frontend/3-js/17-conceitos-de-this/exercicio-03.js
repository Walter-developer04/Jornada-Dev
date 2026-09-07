// ASSUNTO: this em uso isolado / sozinho (Global Execution Context)

// O que é?
// É o valor da palavra-chave "this" avaliada fora de qualquer função, método,
// classe ou bloco de execução interno — isto é, no nível mais externo do código (contexto global).

// Para que serve?
// Serve para acessar a referência do contexto de execução raiz do ambiente onde
// o interpretador JavaScript está rodando.

// Sintaxe:
// const contextoGlobal = this;

// Como usar?
// Em scripts clássicos de navegador, avaliar "this" na raiz acessa o objeto "window".
// No Node.js (quando executando um arquivo CommonJS), o "this" na raiz do módulo refere-se
// a module.exports (um objeto vazio {} por padrão), enquanto no REPL do Node refere-se a global.

// Quando deve usar?
// Hoje em dia, raramente é necessário usar "this" isolado diretamente. O ECMAScript 2020
// padronizou o identificador universal "globalThis", que deve ser preferido.

// Por que usar globalThis em vez de this isolado?
// Porque "globalThis" funciona de maneira consistente em qualquer ambiente
// (Navegador, Node.js, Web Workers, Deno, Bun), independentemente do formato de módulo.

// Quando não deve usar?
// Não utilize "this" isolado para registrar variáveis de negócio globais.

// Por que não deve usar nesses casos?
// Criar propriedades globais poluí o escopo compartilhado, provoca colisões de nomes
// e torna o comportamento da aplicação imprevisível.

// Qual comportamento devo observar?
// O valor de "this" isolado varia estritamente conforme o hospedeiro e o tipo de script:
// 1. Script clássico no navegador: this === window
// 2. Módulo ES (ESM) no navegador ou Node: this no topo é undefined
// 3. Arquivo CommonJS no Node.js: this no topo === module.exports ({})

// ATENÇÃO:
// Não assuma que "this" na raiz de um arquivo .js no Node.js seja o objeto "global".
// No Node, o código de um arquivo roda envolvido em uma função de módulo,
// fazendo com que o "this" da raiz seja "exports", não "global".

// ERRO COMUM:
// Pensar que "this" no nível global é igual em todos os ambientes e configurações de arquivo.

// REGRA:
// Para obter o objeto global confiável em JavaScript moderno, utilize sempre "globalThis".

// Exemplo Prático Executável:
console.log("[exercicio-03] Avaliando 'this' na raiz do arquivo:");
console.log("[exercicio-03] 'this' isolado:", this);

// Comparação contextual no Node.js CommonJS:
const ehModuleExports = (this === exports);
console.log("[exercicio-03] 'this' isolado é idêntico a 'exports' do módulo?", ehModuleExports);

// Comparação com a solução universal padronizada pelo ECMAScript:
console.log("[exercicio-03] globalThis existe no ambiente atual?", typeof globalThis !== "undefined");
console.log("[exercicio-03] 'this' isolado é globalThis?", this === globalThis);