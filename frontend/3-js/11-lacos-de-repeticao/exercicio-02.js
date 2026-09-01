// ============================================================
// ASSUNTO: break / continue
// ============================================================

// break: interrompe o loop completamente
for (let numero = 1; numero <= 10; numero++) {
    if (numero === 6) {
        console.log("Parou no número:", numero);
        break; // Interrompe o loop
    }
    console.log("Número:", numero);
}

// continue: pula esta repetição e segue para a próxima
for (let numero = 1; numero <= 10; numero++) {
    if (numero === 4 || numero === 7) {
        continue; // Pula esta repetição
    }
    console.log("Número:", numero);
}
