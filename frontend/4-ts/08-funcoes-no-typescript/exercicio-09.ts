
// O que é?
// Um tipo de função invocado com a palavra-chave new.

// Para que serve?
// Tipar funções construtoras ou classes que podem ser instanciadas.

class Pessoa {
  constructor(public nome: string) {}
}

type ConstrutorDePessoa = new (nome: string) => Pessoa;

function criarInstancia(Construtor: ConstrutorDePessoa, nome: string) {
  return new Construtor(nome);
}

const novaPessoa = criarInstancia(Pessoa, "Maria");
console.log(novaPessoa.nome);

