// O que é?
// Truthiness é a capacidade de usar qualquer expressão em condicionais.

// Para que serve?
// O JavaScript converte valores para boolean antes de avaliar condições.

// Como usar?
// Use if (valor) para verificar se algo existe ou é válido.

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    // numUsersOnline é truthy (diferente de 0)
    return `Existem ${numUsersOnline} usuários online!`;
  }
  // numUsersOnline é 0 (falsy)
  return "Ninguém está online agora.";
}

console.log(getUsersOnlineMessage(10));
console.log(getUsersOnlineMessage(0));
