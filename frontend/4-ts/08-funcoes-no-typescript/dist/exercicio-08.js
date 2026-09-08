"use strict";
// O que é?
// Um tipo de função que também possui propriedades (objeto).
const processar = (valor) => valor * 2;
processar.descricao = "Dobra o valor informado.";
console.log(processar.descricao);
console.log(processar(5));
