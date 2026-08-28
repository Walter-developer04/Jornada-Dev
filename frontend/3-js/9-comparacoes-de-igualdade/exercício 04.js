// isLooselyEqual é o algoritmo que o == usa por baixo dos panos
// ele vai convertendo os valores até os tipos baterem
console.log(true == 1); // true, o boolean vira número
console.log("5" == 5); // true

// por isso o == pode gerar resultados meio surpreendentes
console.log("" == false); // true, os dois viram 0

// quando você quer certeza, parte pra ===
console.log("" === false); // false
