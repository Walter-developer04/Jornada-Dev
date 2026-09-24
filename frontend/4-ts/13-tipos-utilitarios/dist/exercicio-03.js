"use strict";
// Omit<T, K> remove do tipo original as propriedades informadas.
// O resultado contem apenas as propriedades que nao foram omitidas.
const pedidoLista = {
    id: 10,
    cliente: "Joao",
};
console.log(pedidoLista);
// { id: 10, cliente: 'Joao' }
