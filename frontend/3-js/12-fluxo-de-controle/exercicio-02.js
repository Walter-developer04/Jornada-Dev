// EXERCÍCIO 02 — switch

// O switch compara um valor com múltiplos casos
// e executa o bloco correspondente ao caso que coincidir.
// O break encerra a execução após o caso correto.
// O default é executado quando nenhum caso coincidir.

// --- Exemplo 1: Dia da semana ---

const numeroDoDia = 3;

// Exibe o nome do dia correspondente ao número.
switch (numeroDoDia) {
    case 1:
        console.log("Segunda-feira.");
        break;
    case 2:
        console.log("Terça-feira.");
        break;
    case 3:
        console.log("Quarta-feira.");
        break;
    case 4:
        console.log("Quinta-feira.");
        break;
    case 5:
        console.log("Sexta-feira.");
        break;
    case 6:
        console.log("Sábado.");
        break;
    case 7:
        console.log("Domingo.");
        break;
    default:
        console.log("Número inválido. Informe entre 1 e 7.");
}

// --- Exemplo 2: Estação do ano ---

const estacaoAtual = "inverno";

// Exibe uma descrição baseada na estação informada.
switch (estacaoAtual) {
    case "verão":
        console.log("Dias quentes e ensolarados.");
        break;
    case "outono":
        console.log("Folhas caindo e clima ameno.");
        break;
    case "inverno":
        console.log("Dias frios e noites longas.");
        break;
    case "primavera":
        console.log("Flores desabrochando e clima agradável.");
        break;
    default:
        console.log("Estação não reconhecida.");
}

// --- Exemplo 3: Nível de dificuldade ---

const nivelEscolhido = "medio";

// Quando dois casos compartilham o mesmo comportamento,
// basta empilhá-los sem break entre eles.
switch (nivelEscolhido) {
    case "facil":
        console.log("Modo fácil: erros não penalizam.");
        break;
    case "medio":
    case "intermediario":
        console.log("Modo médio: erros removem metade dos pontos.");
        break;
    case "dificil":
        console.log("Modo difícil: erros zeram a pontuação.");
        break;
    default:
        console.log("Nível não reconhecido.");
}