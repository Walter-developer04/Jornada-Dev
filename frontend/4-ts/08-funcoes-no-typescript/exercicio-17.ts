
// O que é?
// Um parâmetro fictício no início da função para tipar o contexto this.

// Para que serve?
// Garantir que o this dentro da função tenha o formato esperado.

type Usuario = { nome: string; apresentar: () => void };

const usuario: Usuario = {
  nome: "Ana",
  apresentar: function (this: Usuario) {
    console.log(`Olá, meu nome é ${this.nome}`);
  },
};

usuario.apresentar();

// Erro esperado se desanexar a função sem bind:
// const apresentarSolto = usuario.apresentar;
// apresentarSolto();

