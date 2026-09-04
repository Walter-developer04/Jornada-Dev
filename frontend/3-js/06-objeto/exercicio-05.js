/* ==================  Prototype Inheritance ================== */

const carro1 = {
  marca: "Honda",
  modelo: "Civic",
  cor: "Preto",
};

const carro2 = {
  marca: "Toyota",
  modelo: "Corolla",
  cor: "Branco"
};

Object.prototype.ligar = function()  {
    return `Vrum! ${this.marca} ${this.modelo} ligou!`;
};

console.log(carro1.ligar());
// Resultado: "Vrum! Honda Civic ligou!"

console.log(carro2.ligar());
// Resultado: "Vrum! Toyota Corolla ligou!"

// Verificando de onde veio o método
console.log(carro1.hasOwnProperty("ligar"));
// Resultado: false (não está DENTRO do carro1)

console.log(Object.prototype.hasOwnProperty("ligar"));
// Resultado: true (está no prototype!)