// Exercício 02: Rest (Parâmetros Rest)

// A sintaxe '...numeros' agrupa os argumentos RESTANTES em uma instância real de Array.
// O parâmetro rest precisa ser obrigatoriamente o último na lista de parâmetros.
function somarRestantes(multiplicador, ...numeros) {
  // Diferente do objeto 'arguments', 'numeros' é um Array real (possui métodos como forEach, map, etc).
  console.log("É uma instância de Array?", Array.isArray(numeros));

  let total = 0;
  for (const n of numeros) {
    total += n;
  }

  return total * multiplicador;
}

// O valor 2 é atribuído a 'multiplicador'; 10, 20 e 30 são reunidos no array 'numeros'.
const resultado = somarRestantes(2, 10, 20, 30);
console.log("Resultado final:", resultado); // 120