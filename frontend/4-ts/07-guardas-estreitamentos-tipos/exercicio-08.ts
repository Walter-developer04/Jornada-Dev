// O que é?
// O operador de negação (!) inverte o resultado booleano e afeta o narrowing.

// Para que serve?
// ! no if significa que o else recebe o tipo truthy.

// Sintaxe:
// if (!valor) { /* valor é falsy */ } else { /* valor é truthy */ }

function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
  if (!values) {
    // values é undefined
    return values;
  } else {
    // values é number[]
    return values.map((x) => x * factor);
  }
}

console.log(multiplyAll([1, 2, 3], 2));
console.log(multiplyAll(undefined, 2));
