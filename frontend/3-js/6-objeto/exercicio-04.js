/* ==================== OBJECT PROTOTYPE ==================== */

// Fazendo uma boneca
const boneca1 = {
    nome: "Emilia",
    corDoCabelo: "Amarelo e vermelho"
};

// Acessando a propriedade "nome" do objeto boneca1
// Resultado esperado: "Emilia"
console.log("Nome: ", boneca1.nome);

// Acessando a propriedade "corDoCabelo" do objeto boneca1
// Resultado esperado: "Amarelo e vermelho"
console.log("Cabelo: ", boneca1.corDoCabelo);

// toString() é um método herdado do Object.prototype
// Como não foi personalizado, retorna o padrão: "[object Object]"
console.log(boneca1.toString());

// Mostra todos os métodos e propriedades que todo objeto herda
// por padrão do Object.prototype (como toString, valueOf, hasOwnProperty, etc.)
console.log(Object.prototype);