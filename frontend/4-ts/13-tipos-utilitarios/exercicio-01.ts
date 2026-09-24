// Partial<T> transforma todas as propriedades de T em opcionais.
// Util quando precisamos representar uma atualizacao parcial de um objeto.

type Usuario = {
    nome: string;
    email: string;
    idade: number;
};

// Todas as propriedades passam a ser opcionais depois de Partial.
type UsuarioAtualizacao = Partial<Usuario>;

// Como sao opcionais, podemos informar somente as que queremos alterar.
const atualizacao: UsuarioAtualizacao = {
    idade: 30,
};

function atualizarUsuario(usuario: Usuario, dados: UsuarioAtualizacao): Usuario {
    return { ...usuario, ...dados };
}

const usuarioOriginal: Usuario = {
    nome: "Maria",
    email: "maria@exemplo.com",
    idade: 28,
};

const usuarioAtualizado = atualizarUsuario(usuarioOriginal, atualizacao);

console.log(usuarioAtualizado);
// { nome: 'Maria', email: 'maria@exemplo.com', idade: 30 }