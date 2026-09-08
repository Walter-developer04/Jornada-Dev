// =============================================================================
// EXERCÍCIO 01 - COMMONJS
// =============================================================================
//
// O QUE É:
// CommonJS é o sistema de módulos adotado originalmente pelo Node.js.
// Cada arquivo é tratado como um módulo independente, com três recursos
// centrais:
//   - require(): importa o que outro módulo exportou;
//   - module.exports: define o que o módulo atual exporta;
//   - exports: atalho para adicionar itens ao objeto exportado.
//
// PARA QUE SERVE:
// Serve para dividir um programa em vários arquivos, cada um com sua
// responsabilidade. Um módulo exporta funções, objetos ou constantes;
// os outros módulos importam esses valores com require() em vez de
// duplicar código ou depender de variáveis globais.
//
// QUANDO USAR:
// - Em projetos Node.js que seguem o formato CommonJS;
// - Quando o package.json da pasta não declara "type": "module";
// - Ao consumir pacotes publicados no formato CommonJS.
//
// QUANDO NÃO USAR:
// - Em projetos configurados como ESM ("type": "module" no package.json);
// - Em código para navegadores modernos, que usam ESM nativamente;
// - Quando a documentação do projeto já padronizou import/export.
//
// AMBIENTE DE EXECUÇÃO:
// Execute este arquivo com Node.js:
//     node exercicio-01.js
// No Node.js, um arquivo .js é tratado como CommonJS quando não existe
// package.json na pasta, ou quando o package.json não declara "type",
// ou quando declara "type": "commonjs".
// =============================================================================

// -----------------------------------------------------------------------------
// PARTE 1 - IMPORTAR módulos com require()
// -----------------------------------------------------------------------------
// A função require() recebe o identificador do módulo e devolve o valor que
// esse módulo exportou. Aqui importamos módulos internos (nativos) do Node.js,
// identificados pelo prefixo "node:".

const moduloCaminho = require("node:path");
const moduloSistemaOperacional = require("node:os");

// O módulo "node:path" exporta utilidades para montar caminhos de arquivos.
const caminhoDaPastaDeExercicios = moduloCaminho.join("estudos", "javascript", "modulos");
console.log("Caminho montado com path.join():", caminhoDaPastaDeExercicios);

// O módulo "node:os" exporta informações sobre o sistema operacional.
console.log("Sistema operacional detectado:", moduloSistemaOperacional.platform());

// CommonJS também oferece variáveis especiais, como __dirname, que guarda a
// pasta do arquivo atual. Esse recurso é exclusivo do CommonJS.
console.log("Pasta deste arquivo (__dirname):", __dirname);

// -----------------------------------------------------------------------------
// PARTE 2 - EXPORTAR valores com module.exports
// -----------------------------------------------------------------------------
// O objeto module.exports é o que o require() entrega para quem importar
// este arquivo. Vamos declarar duas funções e exportá-las.

function calcularAreaRetangulo(baseRetangulo, alturaRetangulo) {
    return baseRetangulo * alturaRetangulo;
}

function formatarValorMonetario(valorEmReais) {
    return "R$ " + valorEmReais.toFixed(2).replace(".", ",");
}

// No início do módulo, "exports" e "module.exports" apontam para o MESMO
// objeto vazio. Confira na prática:
console.log("Antes da reatribuição, exports === module.exports?", exports === module.exports);

// Ao atribuir um novo objeto a module.exports, ele passa a ser o valor
// oficialmente exportado pelo módulo:
module.exports = {
    calcularAreaRetangulo,
    formatarValorMonetario
};

// Depois da reatribuição, "exports" continua apontando para o objeto antigo.
// Por isso a documentação do Node.js orienta cuidado: o atalho "exports"
// só funciona enquanto module.exports não for reatribuído.
console.log("Depois da reatribuição, exports === module.exports?", exports === module.exports);

// Demonstração de uso das funções exportadas dentro deste próprio arquivo:
const areaDeExemplo = calcularAreaRetangulo(6, 4);
console.log("Área do retângulo 6 x 4:", areaDeExemplo);
console.log("Valor formatado de exemplo:", formatarValorMonetario(1234.5));

// Em outro arquivo, o consumo das exportações seria feito assim:
//     const { calcularAreaRetangulo, formatarValorMonetario } = require("./exercicio-01.js");
//     console.log(formatarValorMonetario(calcularAreaRetangulo(6, 4)));
// Observação: no CommonJS, em caminhos relativos a extensão pode ser omitida,
// como em require("./exercicio-01").
