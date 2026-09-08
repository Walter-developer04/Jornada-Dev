
// O que é?
// As assinaturas de sobrecarga definem a API pública; a implementação é o código real.

// Regra:
// A assinatura de implementação não pode ser chamada diretamente.

function formatar(valor: string, maiusculo: boolean): string;
function formatar(valor: number, casas: number): string;
function formatar(valor: string | number, opcao: boolean | number): string {
  if (typeof valor === "string") {
    return opcao ? valor.toUpperCase() : valor.toLowerCase();
  }
  return valor.toFixed(opcao as number);
}

console.log(formatar("teste", true));
console.log(formatar(3.1415, 2));

// Erro esperado (implementação não acessível diretamente):
// formatar("teste", 2);

