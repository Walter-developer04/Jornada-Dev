/* ===================== MANIPULAÇÃO DE OBJETOS ===================== */

// 1. Criamos um objeto inicial com algumas propriedades
const carro = {
    marca: "Toyota",
    modelo: "Corolla"
}

// 2. ADICIONANDO NOVOS VALORES (Chave e Valor)
carro.ano = 2024;  // Adiciona a propriedade 'ano' com o valor numérico
carro.ehEletrico = false;  // Adiciona a propriedade 'ehEletrico' com o valor booleano

// 3. ALTERANDO O VALOR DE MODELO
carro.modelo = "Corolla Cross";  // Altera o modelo de "Corolla" para "Corolla Cross"

console.log(carro);