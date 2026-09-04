// O 'use strict' ativa o modo estrito do Javascript. Mas só funcionar 
// no escopo (arquivo ou função) em que ele foi declarado.
// Um dos principais motivos de ativa esse modo é o fato de ter que declara a variavel para antes de utilizá-la. Isso ajuda na identificação de erro e variaveis globais acidentais.
 "use strict";

// jeito certo de declara uma variavel é colocando as palavras-chaves antes, (ex: 'let', 'const', 'var').
let nome = "Walter";

 console.log(nome);

 /* 
   ========================================
    EXEMPLO QUE DARIA ERRO NO MODO: (ESTRITO)
   ========================================
 */

   // 1. Criar a variavelsem declara:

   /*
   
   sobrenome = "Lucas";
   console.log(sobrenome);
   (Isso geraria um "ReferenceError: sobrenome is not defined",
   pois omodo restrito proibe a criação implicitar de variaveis globais).
   
   */