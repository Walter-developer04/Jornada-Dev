// Exclude<T, U> remove de T os membros que existem em U.
// Funciona sobre tipos uniao, eliminando os membros indesejados.

type Permissao = "ler" | "escrever" | "deletar" | "admin";

// Removemos "admin" e "deletar" do conjunto de permissoes.
type PermissaoBasica = Exclude<Permissao, "admin" | "deletar">;

const usuarioPermissao: PermissaoBasica = "escrever";

console.log(usuarioPermissao);
// escrever