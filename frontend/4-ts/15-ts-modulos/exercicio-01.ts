// Namespace: agrupa nomes relacionados em um unico escopo
namespace Matematica {
    // Membro interno: existe no namespace, mas nao e exportado
    const fatorPadrao: number = 2;

    // Membros exportados: ficam acessiveis fora do namespace
    export function dobro(valor: number): number {
        return valor * fatorPadrao; // usa o membro interno
    }

    export function somar(a: number, b: number): number {
        return a + b;
    }
}

// Acesso aos membros exportados pelo nome qualificado
console.log(Matematica.dobro(5));   // 10
console.log(Matematica.somar(3, 4)); // 7

// Matematica.fatorPadrao nao e acessivel aqui: erro de compilacao