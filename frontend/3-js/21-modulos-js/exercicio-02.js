// =============================================================================
// EXERCÍCIO 02 - ESM (ECMAScript Modules)
// =============================================================================
//
// O QUE É:
// ESM (ECMAScript Modules) é o sistema de módulos nativo da linguagem
// JavaScript, definido pela especificação ECMAScript. Ele usa as palavras
// reservadas "import" e "export" para importar e exportar valores.
//
// PARA QUE SERVE:
// Serve para dividir o programa em arquivos com escopo próprio e
// reaproveitamento de código, igual ao CommonJS, porém com sintaxe nativa
// da linguagem, importações resolvidas antes da execução e suporte tanto
// no Node.js quanto nos navegadores modernos. Módulos ESM também executam
// em modo estrito por padrão.
//
// QUANDO USAR:
// - Em projetos JavaScript novos, no Node.js e no navegador;
// - Quando o package.json declara "type": "module";
// - Quando quiser exportações nomeadas e exportação padrão nativas.
//
// QUANDO NÃO USAR:
// - Em projetos Node.js legados que seguem CommonJS sem mistura de formatos;
// - Ao consumir pacotes muito antigos sem suporte adequado a ESM
//   (verifique a documentação do pacote);
// - Em ambientes de execução sem suporte a ESM.
//
// AMBIENTE DE EXECUÇÃO (configuração indispensável):
// Este arquivo tem extensão .js. No Node.js, um arquivo .js só é tratado
// como ESM quando a pasta contém um package.json declarando:
//     {
//         "type": "module"
//     }
// Alternativa: renomear para exercicio-02.mjs (arquivos .mjs são sempre ESM).
// Sem isso, o Node.js tratará o arquivo .js como CommonJS e reportará erro
// ao encontrar "import". Configurado isso, execute com:
//     node exercicio-02.js
// OBSERVAÇÃO IMPORTANTE: no ESM do Node.js, importações de caminhos
// relativos exigem a extensão do arquivo, por exemplo:
//     import { converterTemperaturaCelsiusParaFahrenheit } from "./modulo.js";
// =============================================================================

// -----------------------------------------------------------------------------
// PARTE 1 - IMPORTAÇÕES: nomeada e padrão
// -----------------------------------------------------------------------------
// Importação nomeada: pegamos itens específicos que o módulo de origem
// exportou nominalmente, usando chaves.
import { join } from "node:path";
import { platform } from "node:os";

// Importação padrão (default): cada módulo pode ter no máximo UM export
// padrão, e quem importa escolhe o nome livremente, sem chaves. Módulos
// internos do Node.js também podem ser importados dessa forma. Note que
// estamos importando "node:path" das duas maneiras (nomeada e padrão) no
// mesmo arquivo: as duas formas são válidas.
import moduloCaminho from "node:path";

console.log("Sistema operacional detectado:", platform());
console.log("Caminho montado com join():", join("estudos", "javascript", "modulos"));
console.log("Separador de caminhos do sistema (path.sep):", moduloCaminho.sep);

// -----------------------------------------------------------------------------
// PARTE 2 - EXPORTAÇÃO NOMINADA (named export)
// -----------------------------------------------------------------------------
// A palavra "export" transforma a declaração em item público do módulo.
// Outro módulo poderá importá-la com:
//     import { converterTemperaturaCelsiusParaFahrenheit } from "./exercicio-02.js";

export function converterTemperaturaCelsiusParaFahrenheit(temperaturaCelsius) {
    return (temperaturaCelsius * 9) / 5 + 32;
}

export function converterTemperaturaFahrenheitParaCelsius(temperaturaFahrenheit) {
    return ((temperaturaFahrenheit - 32) * 5) / 9;
}

// -----------------------------------------------------------------------------
// PARTE 3 - EXPORTAÇÃO PADRÃO (default export)
// -----------------------------------------------------------------------------
// O "export default" define o valor principal do módulo. O importador
// escolhe o nome que quiser para ele, sem usar chaves. Um módulo só pode
// ter um export default.

const conversorDeTemperatura = {
    converterCelsiusParaFahrenheit: converterTemperaturaCelsiusParaFahrenheit,
    converterFahrenheitParaCelsius: converterTemperaturaFahrenheitParaCelsius
};

export default conversorDeTemperatura;

// -----------------------------------------------------------------------------
// PARTE 4 - Execução do módulo e informação sobre o próprio arquivo
// -----------------------------------------------------------------------------
// Um módulo ESM também executa código: exportar não impede a execução.

console.log("30 graus Celsius equivalem a", converterTemperaturaCelsiusParaFahrenheit(30), "graus Fahrenheit.");
console.log("212 graus Fahrenheit equivalem a", converterTemperaturaFahrenheitParaCelsius(212), "graus Celsius.");
console.log("Valor padrão do módulo (conversorDeTemperatura):", conversorDeTemperatura);

// O objeto import.meta só existe em módulos ESM e traz informações sobre o
// próprio módulo. import.meta.url cumpre um papel parecido com o __filename
// do CommonJS: entrega o endereço do arquivo atual.
console.log("Endereço deste módulo (import.meta.url):", import.meta.url);

// Em outro módulo ESM, o consumo das exportações seria feito assim:
//     import conversorDeTemperatura from "./exercicio-02.js"; // importação padrão
//     import { converterTemperaturaCelsiusParaFahrenheit } from "./exercicio-02.js"; // nomeada
