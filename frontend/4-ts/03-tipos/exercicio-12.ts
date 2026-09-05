// Declaração de tipo com "interface".
//
// Para que isso serve?
// Define um contrato estrutural estático contendo as propriedades e os tipos exigidos para um objeto.
//
// Qual comportamento devo observar?
// Todo objeto associado à interface deve fornecer obrigatoriamente as propriedades especificadas com os tipos correspondentes.

interface CadastroPessoa {
  nomeCompleto: string;
  idadeAnos: number;
  cidadeNatal: string;
}

const pessoaCadastrada: CadastroPessoa = {
  nomeCompleto: "Guilherme Santos",
  idadeAnos: 31,
  cidadeNatal: "Campinas",
};

console.log(pessoaCadastrada.nomeCompleto);
console.log(pessoaCadastrada.idadeAnos);
console.log(pessoaCadastrada.cidadeNatal);
