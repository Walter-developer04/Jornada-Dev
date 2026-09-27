// External Module: este arquivo e um modulo porque possui export
// Script vs Modulo:
//   script: sem export/import, nomes vazam para o escopo global
//   modulo: com export/import, escopo proprio e privado por padrao

// Exportacoes: interface visivel para quem importar este modulo
export interface Mensagem {
    texto: string;
    prioridade: number;
}

// Funcao interna (nao exportada): privada deste modulo
function marcarComoLida(texto: string): string {
    return texto + " [lida]";
}

// Exportacoes: funcoes visiveis para quem importar
export function formatarMensagem(m: Mensagem): string {
    return marcarComoLida(m.texto) + " (prioridade " + m.prioridade + ")";
}

// Uso interno do proprio modulo
const aviso: Mensagem = { texto: "Sistema atualizado", prioridade: 1 };
console.log(formatarMensagem(aviso));

// Em um projeto com varios arquivos, outro modulo faria:
//   import { Mensagem, formatarMensagem } from "./exercicio-03";
// Aqui nao ha import externo porque e proibido criar arquivos auxiliares.