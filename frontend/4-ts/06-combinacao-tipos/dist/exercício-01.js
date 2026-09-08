"use strict";
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
const cliente = {
    id: "usr-4981",
    saldo: 1500.5,
};
// Solucao comentada:
// type EmailUsuario = string;
// type Contato = { nome: string; email: EmailUsuario; };
