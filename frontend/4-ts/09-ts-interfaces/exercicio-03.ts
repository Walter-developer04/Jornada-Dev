/*
  O que é:
  Interface Declaration é a declaração de uma interface em TypeScript, que define a forma (shape) de um objeto,
  especificando nomes, tipos e obrigatoriedade de propriedades, além de métodos.

  Para que serve:
  Serve para criar contratos claros que objetos devem seguir, permitindo verificação estática de tipos,
  autocompletar em editores e documentação do formato esperado dos dados.

  Como usar:
  interface NomeDaInterface {
    propriedade: tipo;
    metodo(): tipoDeRetorno;
  }

  Quando usar:
  - Para definir a estrutura de objetos que serão utilizados em várias partes do código.
  - Para tipar parâmetros de funções que recebem objetos com formato específico.
  - Para modelar entidades de domínio (usuário, produto, pedido etc.).

  Quando não usar:
  - Quando o objeto é usado apenas localmente e não há necessidade de reutilização.
  - Quando você precisa de uniões, tipos primitivos ou funções com assinaturas complexas (considere `type`).
  - Quando a estrutura é extremamente simples e um tipo literal inline já resolve.
*/

// Exemplo simples: declarando uma interface básica
interface Endereco {
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
  cep: string;
}

// Utilizando a interface para tipar um objeto
const enderecoCliente: Endereco = {
  rua: "Av. Brasil",
  numero: 1500,
  cidade: "São Paulo",
  estado: "SP",
  cep: "01310-100"
};

console.log(enderecoCliente);

// Exemplo intermediário: propriedades opcionais e somente leitura
interface Usuario {
  readonly id: number;          // não pode ser alterado após criação
  nome: string;
  email: string;
  telefone?: string;            // propriedade opcional
}

const usuario: Usuario = {
  id: 1,
  nome: "Ana",
  email: "ana@email.com"
  // telefone não é obrigatório
};

// usuario.id = 2; // Erro: propriedade somente leitura
console.log(usuario);

// Exemplo prático: função que recebe objeto tipado por interface
interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}

function calcularTotal(produto: Produto): number {
  return produto.preco * produto.quantidade;
}

const carrinho: Produto = {
  nome: "Teclado",
  preco: 150.90,
  quantidade: 2
};

console.log(`Total: R$ ${calcularTotal(carrinho)}`);

// Declarando métodos em interfaces
interface ContaBancaria {
  titular: string;
  saldo: number;
  depositar(valor: number): void;
  sacar(valor: number): boolean;
  consultarSaldo(): number;
}

const minhaConta: ContaBancaria = {
  titular: "Paulo",
  saldo: 1000,
  depositar(valor) {
    this.saldo += valor;
  },
  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  },
  consultarSaldo() {
    return this.saldo;
  }
};

minhaConta.depositar(500);
console.log(minhaConta.consultarSaldo());

// Exemplo com arrays de objetos tipados por interface
interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

const biblioteca: Livro[] = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", anoPublicacao: 1899 },
  { titulo: "O Alquimista", autor: "Paulo Coelho", anoPublicacao: 1988 }
];

biblioteca.forEach(livro => {
  console.log(`${livro.titulo} - ${livro.autor} (${livro.anoPublicacao})`);
});
