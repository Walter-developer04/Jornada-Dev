/*
    ============================
    ESCOPO DE BLOCO EM VARIAVEIS
    ============================
*/

// O escopo de bloco dita que uma variável só pode ser vista e utilizada dentro do "bloco" de código onde foi criada (geralmente delimitado por chaves { }.

/*
   ================
   PARA QUE SERVE ? 
   ================
*/

//  Evita que variáveis "vazem" para o código principal, prevenindo bugs e conflitos de nomes.

// Assim que a execução do bloco termina, a variável é destruída da memória.
// Nota importante: Em linguagens como JavaScript (ES6+), as declarações let e const respeitam o escopo de bloco (diferente do antigo var, que ignorava as chaves).

// Variável declarada fora do bloco
let fora = "Bob esponja";

if (true) {
    // INÍCIO DO ESCOPO DE BLOCO
    
    let dentro = "Lula molusco";
    
    console.log(fora);  // Funciona! Variáveis de fora podem ser lidas aqui dentro.
    console.log(dentro); // Funciona! Estamos no mesmo bloco onde ela nasceu.
    
} // FIM DO ESCOPO DE BLOCO (A variável 'dentro' deixa de existir aqui)

console.log(fora);  // Funciona! 'fora' continua existindo normalmente.

// A linha abaixo geraria um ERRO (ReferenceError) no console.
// console.log(dentro); // ERRO: A variável 'dentro' não está definida neste escopo.