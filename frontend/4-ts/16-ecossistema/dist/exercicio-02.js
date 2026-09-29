"use strict";
/*
 * ANÁLISE ESTÁTICA (Linting)
 *
 * O que é:
 *   Um linter lê o código sem executá-lo e aplica regras de qualidade e
 *   segurança. Ele encontra problemas que o compilador aceita.
 *
 * Para que serve:
 *   Detectar padrões que costumam gerar bugs ou dificultar a manutenção:
 *   variáveis sem uso, promessas sem tratamento, uso de `any`, entre outros.
 *
 * Quando usar:
 *   Continuamente, no editor, e como etapa obrigatória na integração contínua.
 *
 * Por que usar:
 *   - Encontra erros antes da execução.
 *   - Faz cumprir convenções da equipe de forma automática.
 *   - Complementa o TypeScript: o tsc valida tipos, o linter valida práticas.
 *
 * tsc x ESLint:
 *   - tsc (compilador): verifica a consistência dos tipos. Com `strict`
 *     ele bloqueia `any` implícito, mas aceita `any` escrito de forma explícita.
 *   - ESLint com typescript-eslint: aplica regras configuráveis, como
 *       @typescript-eslint/no-explicit-any
 *       @typescript-eslint/explicit-function-return-type
 *       @typescript-eslint/no-floating-promises
 *     Execução: npx eslint .
 *
 * Neste arquivo aparecem as práticas que essas regras incentivam.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.paraTextoSeguro = paraTextoSeguro;
exports.somar = somar;
exports.lerMensagemDeErro = lerMensagemDeErro;
exports.executarComFalhaTratada = executarComFalhaTratada;
// Evitar: `function ler(entrada: any) { return entrada.valor; }`
// O `any` desliga a verificação de tipos e o erro só aparece em execução.
//
// Preferir `unknown`: o compilador exige verificar o tipo antes de usar o valor.
function paraTextoSeguro(entrada) {
    if (typeof entrada === "string") {
        return entrada;
    }
    if (typeof entrada === "number") {
        return String(entrada);
    }
    return "";
}
// Tipo de retorno explícito deixa o contrato da função visível e evita que
// uma alteração interna mude o retorno sem que ninguém perceba.
function somar(numeros) {
    return numeros.reduce((total, atual) => total + atual, 0);
}
// Em JavaScript é possível lançar qualquer valor, não só objetos Error.
// Por isso o erro capturado deve ser tratado como `unknown`.
function lerMensagemDeErro(erro) {
    return erro instanceof Error ? erro.message : "Erro desconhecido";
}
function executarComFalhaTratada() {
    try {
        throw new Error("Falha simulada");
    }
    catch (erro) {
        return lerMensagemDeErro(erro);
    }
}
function demonstrarLinting() {
    console.log(paraTextoSeguro(42));
    console.log(somar([1, 2, 3]));
    console.log(executarComFalhaTratada());
}
if (require.main === module) {
    demonstrarLinting();
}
