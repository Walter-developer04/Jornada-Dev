
// O que é?
// Um tipo de função que também possui propriedades (objeto).

// Para que serve?
// Quando uma função precisa ter atributos ou estados adicionais.

type FuncaoComPropriedade = {
  descricao: string;
  (valor: number): number;
};

const processar: FuncaoComPropriedade = (valor: number) => valor * 2;
processar.descricao = "Dobra o valor informado.";

console.log(processar.descricao);
console.log(processar(5));

