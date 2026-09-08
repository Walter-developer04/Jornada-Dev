// O que é?
// switch statements também fazem narrowing baseado em igualdade.

// Para que serve?
// Organizar múltiplas verificações de tipo de forma clara.

// Sintaxe:
// switch (valor) { case "literal": ... }

type Status = "ativo" | "inativo" | "pendente" | "cancelado";

function processarStatus(status: Status) {
  switch (status) {
    case "ativo":
      // status é "ativo"
      console.log("Ativo");
      break;
    case "inativo":
      // status é "inativo"
      console.log("Inativo");
      break;
    case "pendente":
      // status é "pendente"
      console.log("Pendente");
      break;
    case "cancelado":
      // status é "cancelado"
      console.log("Cancelado");
      break;
  }
}

processarStatus("ativo");
processarStatus("inativo");
