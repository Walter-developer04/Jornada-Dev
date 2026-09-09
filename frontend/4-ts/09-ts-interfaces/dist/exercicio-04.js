"use strict";
/*
  O que é:
  Hybrid Types (Tipos Híbridos) são tipos que combinam múltiplas formas em uma única entidade.
  No TypeScript, isso geralmente é feito usando uma interface que descreve um objeto que também pode ser chamado como função
  (possui call signature) e possui propriedades adicionais. Ou seja, um valor que é ao mesmo tempo função e objeto.

  Para que serve:
  Permite modelar valores que têm comportamento duplo, como funções que carregam metadados ou estado,
  comuns em bibliotecas JavaScript (ex: jQuery, que é função e tem métodos).

  Como usar:
  interface TipoHibrido {
    (parametro: tipo): tipoRetorno; // assinatura de chamada
    propriedade: tipo;
    metodo(): tipo;
  }

  Quando usar:
  - Quando uma função precisa ter propriedades associadas (ex.: função com configuração ou metadados).
  - Para interoperar com APIs JavaScript que retornam objetos chamáveis.
  - Para criar fábricas de funções com estado.

  Quando não usar:
  - Quando a entidade é apenas uma função ou apenas um objeto; mantenha a simplicidade.
  - Quando não há necessidade real de combinar comportamentos; pode confundir a leitura do código.
  - Para modelar dados simples de domínio; prefira interfaces puras.
*/
// Implementação do tipo híbrido
const saudacao = (nome) => `Olá, ${nome}!`;
saudacao.idioma = "Português";
console.log(saudacao("Maria")); // Uso como função
console.log(saudacao.idioma); // Acesso à propriedade
function criarContador() {
    const contador = (() => {
        contador.valor++;
    });
    contador.valor = 0;
    contador.reset = () => {
        contador.valor = 0;
    };
    return contador;
}
const contador = criarContador();
contador();
contador();
console.log(contador.valor); // 2
contador.reset();
console.log(contador.valor); // 0
function criarValidadorEmail() {
    const validador = ((email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    });
    validador.mensagemErro = "E-mail inválido";
    validador.atualizarMensagem = (novaMensagem) => {
        validador.mensagemErro = novaMensagem;
    };
    return validador;
}
const validadorEmail = criarValidadorEmail();
console.log(validadorEmail("teste@email.com")); // true
console.log(validadorEmail("invalido")); // false
console.log(validadorEmail.mensagemErro); // "E-mail inválido"
validadorEmail.atualizarMensagem("Por favor, informe um e-mail válido.");
console.log(validadorEmail.mensagemErro);
