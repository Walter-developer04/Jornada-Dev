"use strict";
// External Module: este arquivo e um modulo porque possui export
// Script vs Modulo:
//   script: sem export/import, nomes vazam para o escopo global
//   modulo: com export/import, escopo proprio e privado por padrao
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarMensagem = formatarMensagem;
// Funcao interna (nao exportada): privada deste modulo
function marcarComoLida(texto) {
    return texto + " [lida]";
}
// Exportacoes: funcoes visiveis para quem importar
function formatarMensagem(m) {
    return marcarComoLida(m.texto) + " (prioridade " + m.prioridade + ")";
}
// Uso interno do proprio modulo
const aviso = { texto: "Sistema atualizado", prioridade: 1 };
console.log(formatarMensagem(aviso));
// Em um projeto com varios arquivos, outro modulo faria:
//   import { Mensagem, formatarMensagem } from "./exercicio-03";
// Aqui nao ha import externo porque e proibido criar arquivos auxiliares.
