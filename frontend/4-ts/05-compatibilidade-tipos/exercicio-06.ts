// O que é?
// Por padrão (sem strictFunctionTypes), o TS permite bivariância em parâmetros:
// Um parâmetro mais específico pode ser aceito no lugar de um mais genérico.
// Isso é "unsound" (inseguro), mas útil no dia a dia.

type Animal = { name: string };
type Dog = Animal & { breed: string };

let handlerAnimal = (a: Animal) => { console.log(a.name); };
let handlerDog = (d: Dog) => { console.log(d.breed); };

// Sem strictFunctionTypes, isso é permitido (Bivariância).
// Com strictFunctionTypes ativado no tsconfig, geraria erro, pois 'handlerDog' 
// tentaria acessar 'breed' em um Animal genérico.
handlerAnimal = handlerDog;
