/**
 * ===================================================
 *  EXERCICIO 06 - COMBINANDO ALIASES COM UNIONS E INTERSECTIONS
 * ===================================================
 *  O QUE E:      Composicao avancada usando intersecoes para dados comuns e unioes para variantes.
 *  O QUE FAZ:    Cria modelos de dados flexiveis com cabecalho fixo e corpo variavel.
 *  SINTAXE:      type Composto = Fixo & (OpcaoA | OpcaoB);
 *  QUANDO USAR:  Em envelopes de requisicoes, respostas HTTP, mensagens e eventos de mensageria.
 *  QUANDO NAO:   Evitar composicoes excessivamente aninhadas que tornem mensagens de erro confusas.
 * ===================================================
 */

// 1. EXEMPLO CORRETO
type MetadadosAuditoria = {
  protocolo: string;
  timestamp: number;
};

type EventoLogin = {
  tipo: "login";
  ipOrigem: string;
};

type EventoLogout = {
  tipo: "logout";
  motivoEncerramento: string;
};

type EventoSistema = MetadadosAuditoria & (EventoLogin | EventoLogout);

const auditoriaLogin: EventoSistema = {
  protocolo: "prot-2026",
  timestamp: 1726000000,
  tipo: "login",
  ipOrigem: "192.168.1.10",
};

// 2. EXEMPLO INCORRETO
// Intersecao direta de tipos primitivos incompativeis gera o tipo impossivel never
type Impossivel = string & number;
// @ts-expect-error - O tipo 'string' nao pode ser atribuido ao tipo 'never'
const valorInvalido: Impossivel = "teste";

// 3. MINI-DESAFIO
// Monte 'RespostaServico' como a intersecao de 'Cabecalho' com a uniao 'CorpoSucesso | CorpoErro'.
type Cabecalho = { codigoHttp: number };
type CorpoSucesso = { sucesso: true; dados: string[] };
type CorpoErro = { sucesso: false; erro: string };
type RespostaServico = Cabecalho & (CorpoSucesso | CorpoErro);

// Solucao comentada:
// type RespostaServico = Cabecalho & (CorpoSucesso | CorpoErro);
