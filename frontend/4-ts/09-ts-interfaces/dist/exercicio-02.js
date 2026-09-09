"use strict";
/*
  O que é:
  Extending Interfaces é o mecanismo de herança entre interfaces em TypeScript, usando a palavra-chave `extends`.
  Uma interface filha herda todas as propriedades e métodos da interface pai e pode adicionar novas características.

  Para que serve:
  Permite reutilizar definições de tipos, criando hierarquias e evitando repetição de código.
  Facilita a modelagem de domínios onde existem entidades base e especializações.

  Como usar:
  interface Animal { nome: string; }
  interface Cachorro extends Animal { raca: string; }

  Quando usar:
  - Quando você tem uma interface base com propriedades comuns e deseja criar versões mais específicas.
  - Para representar relações de herança natural entre tipos de dados.
  - Para criar contratos que devem ser implementados por classes de forma encadeada.

  Quando não usar:
  - Quando não há relação de herança clara; prefira composição ou interfaces separadas.
  - Quando a extensão levar a múltiplos níveis profundos e difíceis de manter.
  - Quando você pode usar interseção de tipos (`type A = B & C`) se não precisar de semântica de interface.
*/
// Criando um objeto compatível com Cachorro
const meuCachorro = {
    nome: "Rex",
    idade: 5,
    raca: "Labrador",
    emitirSom() {
        return "Som genérico do animal";
    },
    latir() {
        return "Au au!";
    }
};
console.log(meuCachorro.nome);
console.log(meuCachorro.emitirSom());
console.log(meuCachorro.latir());
const meuGato = {
    nome: "Mimi",
    idade: 3,
    tempoGestacaoMeses: 2,
    corPelo: "preto",
    emitirSom() {
        return "Som de gato";
    },
    miar() {
        return "Miau!";
    }
};
console.log(meuGato.miar());
const funcionarioComum = {
    nome: "Carlos",
    cpf: "123.456.789-00",
    dataNascimento: new Date("1990-05-10"),
    matricula: 1234,
    salario: 5000,
    cargo: "Analista"
};
const gerente = {
    nome: "Fernanda",
    cpf: "987.654.321-00",
    dataNascimento: new Date("1985-08-22"),
    matricula: 1000,
    salario: 12000,
    cargo: "Gerente de TI",
    equipe: [funcionarioComum],
    autorizarDespesas(valor) {
        return valor <= 10000;
    }
};
console.log(gerente.equipe[0].nome);
console.log(gerente.autorizarDespesas(5000));
