// Parameters<T> extrai os tipos dos parametros de uma funcao em forma de tupla.
// O resultado pode ser usado para receber os mesmos argumentos da funcao original.

function cadastrarUsuario(nome: string, email: string, ativo: boolean) {
    return { nome, email, ativo };
}

// Parameters retorna uma tupla [string, string, boolean].
type ParametrosCadastro = Parameters<typeof cadastrarUsuario>;

const args: ParametrosCadastro = ["Ana", "ana@exemplo.com", true];

// A tupla pode ser espalhada diretamente na chamada da funcao.
const novoUsuario = cadastrarUsuario(...args);

console.log(novoUsuario);
// { nome: 'Ana', email: 'ana@exemplo.com', ativo: true }