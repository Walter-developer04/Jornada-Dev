/**
 * ===================================================
 *  EXERCICIO 01 - TYPE ALIASES COM PRIMITIVOS
 * ===================================================
 *  O QUE E:      Definicao de um nome alternativo reutilizavel para tipos existentes.
 *  O QUE FAZ:    Declara apelidos semanticos para tipos basicos e os utiliza no codigo.
 *  SINTAXE:      type NomeDoTipo = tipo;
 *  QUANDO USAR:  Para dar clareza semantica e evitar repeticao de tipos complexos.
 *  QUANDO NAO:   Evitar criar aliases para tipos triviais sem ganho de contexto.
 * ===================================================
 */

// 1. EXEMPLO CORRETO
type IdentificadorUsuario = string;
type ValorMonetario = number;

type RegistroUsuario = {
  id: IdentificadorUsuario;
  saldo: ValorMonetario;
};

const cliente: RegistroUsuario = {
  id: "usr-4981",
  saldo: 1500.5,
};

// 2. EXEMPLO INCORRETO
// Type aliases nao permitem redeclaracao no mesmo escopo (ao contrario de interfaces)
type ChaveAcesso = string;
// @ts-expect-error - O identificador 'ChaveAcesso' duplicado gera erro de compilacao
type ChaveAcesso = number;

// 3. MINI-DESAFIO
// Complete a declaracao do tipo 'EmailUsuario' como string e monte o tipo 'Contato'.
type EmailUsuario = string;
type Contato = {
  nome: string;
  email: EmailUsuario;
};

// Solucao comentada:
// type EmailUsuario = string;
// type Contato = { nome: string; email: EmailUsuario; };
