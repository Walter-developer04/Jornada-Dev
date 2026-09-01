// ============================================================
// ASSUNTO: do...while
// ============================================================

// Executa primeiro e verifica a condição depois
let contador = 1;

do {
    console.log("Contador:", contador);
    contador++;
} while (contador <= 5);

// O bloco do do...while sempre roda ao menos uma vez
// Mesmo quando a condição já é falsa desde o início
let valor = 100;

do {
    console.log("Isso aparece uma vez mesmo com condição falsa. Valor:", valor);
} while (valor < 10);
