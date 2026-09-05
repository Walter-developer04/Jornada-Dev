// O tipo "any" no TypeScript.
//
// Para que isso serve?
// Permite atribuir qualquer valor a uma variável, desligando a validação estática do compilador sobre ela.
//
// Qual comportamento devo observar?
// O compilador aceita qualquer operação ou método sem emitir avisos de erro estáticos, retirando a proteção da tipagem. Seu uso rotineiro deve ser evitado.

let dadoIndeterminado: any = "Texto preliminar";

dadoIndeterminado = 42;
dadoIndeterminado = true;

console.log(dadoIndeterminado);
