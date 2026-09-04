// const declara variável com escopo de bloco e não permite reatribuição; é usada para valores fixos. Deve ser inicializada na declaração. Ainda é amplamente usado em JavaScript atual.

// uma cosntate que está recebendo com valor um número.
const nascimento = 2004;

// se tentar rodar esse codigo vai da erro pois um valor de uma constante não pode ser mudado.
nascimento = 1999;

console.log("Eu nasci no ano de " + nascimento + ".");