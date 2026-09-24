// ReturnType<T> extrai o tipo de retorno de uma funcao.
// O resultado pode ser usado para tipar variaveis que receberao o retorno da funcao.

function gerarToken(): string {
    return Math.random().toString(36).slice(2);
}

// ReturnType retorna string neste caso, pois a funcao devolve uma string.
type Token = ReturnType<typeof gerarToken>;

const token: Token = gerarToken();

console.log(token);
// ex: 4f1a2b...