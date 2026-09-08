
// O que é?
// Múltiplas assinaturas para uma mesma função, com tipos diferentes.

// Para que serve?
// Definir com precisão como uma função se comporta com diferentes tipos de entrada.

function inverter(valor: string): string;
function inverter(valor: number): number;
function inverter(valor: any): any {
  if (typeof valor === "string") {
    return valor.split("").reverse().join("");
  }
  if (typeof valor === "number") {
    return parseFloat(valor.toString().split("").reverse().join(""));
  }
}

console.log(inverter("abc"));
console.log(inverter(123));

