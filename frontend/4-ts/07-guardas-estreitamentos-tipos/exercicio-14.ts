// O que é?
// == null verifica tanto null quanto undefined simultaneamente.

// Para que serve?
// Remover ambos null e undefined de uma union em uma única verificação.

// Comportamento:
// == null é true para null E para undefined.
// != null é false para null E para undefined.

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove tanto null quanto undefined
  if (container.value != null) {
    // container.value é number
    console.log(container.value);
    container.value *= factor;
  }
}

const c1: Container = { value: 10 };
const c2: Container = { value: null };
const c3: Container = { value: undefined };

multiplyValue(c1, 2);
multiplyValue(c2, 2);
multiplyValue(c3, 2);
