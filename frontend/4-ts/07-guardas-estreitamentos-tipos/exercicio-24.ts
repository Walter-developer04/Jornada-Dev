// O que é?
// Type predicates podem ser usados com Array.prototype.filter.

// Para que serve?
// Filtrar arrays e obter um tipo mais específico no resultado.

// Sintaxe:
// array.filter(isType) retorna Type[]

interface Usuario {
  tipo: "usuario";
  nome: string;
}

interface Admin {
  tipo: "admin";
  nome: string;
  permissoes: string[];
}

type Pessoa = Usuario | Admin;

function isAdmin(pessoa: Pessoa): pessoa is Admin {
  return pessoa.tipo === "admin";
}

const pessoas: Pessoa[] = [
  { tipo: "usuario", nome: "João" },
  { tipo: "admin", nome: "Maria", permissoes: ["admin"] },
  { tipo: "usuario", nome: "Pedro" },
  { tipo: "admin", nome: "Ana", permissoes: ["superadmin"] }
];

// filter retorna Admin[] porque isAdmin é um type predicate
const admins: Admin[] = pessoas.filter(isAdmin);

admins.forEach(admin => {
  console.log(`${admin.nome}: ${admin.permissoes.join(", ")}`);
});
