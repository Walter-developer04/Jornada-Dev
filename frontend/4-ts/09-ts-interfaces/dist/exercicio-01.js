"use strict";
/*
  O que é:
  Em TypeScript, tanto `type` quanto `interface` são formas de definir a estrutura de um objeto.
  `type` cria um alias de tipo que pode representar qualquer tipo válido (objetos, uniões, primitivos, etc.).
  `interface` declara um contrato que objetos devem seguir, podendo ser estendida e implementada por classes.

  Para que serve:
  Ambos servem para dar nome a estruturas e facilitar a reutilização de tipos, aumentando a segurança e a legibilidade do código.

  Como usar:
  - Com `type`: type Usuario = { nome: string; idade: number };
  - Com `interface`: interface Usuario { nome: string; idade: number };

  Quando usar:
  - Prefira `interface` para definir contratos de objetos que podem ser estendidos ou implementados por classes.
  - Prefira `type` para criar aliases de tipos complexos, uniões, interseções e tipos primitivos.

  Quando não usar:
  - Evite `interface` quando precisar de uniões ou tipos que não podem ser representados como contrato de objeto.
  - Evite `type` quando quiser aproveitar a capacidade de extensão e herança de interfaces (embora `type` também possa usar interseção, a semântica é diferente).
*/
// Ambos podem ser usados da mesma forma para tipar objetos
const notebookType = { nome: "Notebook", preco: 3000 };
const notebookInterface = { nome: "Notebook", preco: 3000 };
console.log(notebookType);
console.log(notebookInterface);
const pedido = { id: 1, status: "pendente" };
console.log(pedido);
const usuarioComAuditoria = {
    nome: "Maria",
    preco: 99.90,
    dataCriacao: new Date(),
    criadoPor: "admin"
};
console.log(usuarioComAuditoria);
const cliente = { id: 1, nome: "João", email: "joao@email.com" };
console.log(cliente);
// Diferenças práticas:
// 1. Interfaces podem ser estendidas com extends, types usam interseção (&)
// 2. Interfaces podem ser implementadas por classes, types não (diretamente)
// 3. Types podem representar uniões, interfaces não
// 4. Interfaces têm merging (declaração pode ser fundida), types não
