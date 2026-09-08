"use strict";
// O que é?
// Type predicates podem ser usados com Array.prototype.filter.
function isAdmin(pessoa) {
    return pessoa.tipo === "admin";
}
const pessoas = [
    { tipo: "usuario", nome: "João" },
    { tipo: "admin", nome: "Maria", permissoes: ["admin"] },
    { tipo: "usuario", nome: "Pedro" },
    { tipo: "admin", nome: "Ana", permissoes: ["superadmin"] }
];
// filter retorna Admin[] porque isAdmin é um type predicate
const admins = pessoas.filter(isAdmin);
admins.forEach(admin => {
    console.log(`${admin.nome}: ${admin.permissoes.join(", ")}`);
});
