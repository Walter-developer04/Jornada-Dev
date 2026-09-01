// ============================================================
// ASSUNTO: for...in
// ============================================================

// Percorre as propriedades de um objeto
const pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "Brasília",
    profissao: "Designer"
};

for (const propriedade in pessoa) {
    console.log("Propriedade:", propriedade, "| Valor:", pessoa[propriedade]);
}

// for...in acessa as chaves do objeto
// for...of acessa os valores de uma coleção indexada
// Essa é a diferença principal entre os dois

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2020
};

for (const chave in carro) {
    console.log(chave, "=>", carro[chave]);
}
