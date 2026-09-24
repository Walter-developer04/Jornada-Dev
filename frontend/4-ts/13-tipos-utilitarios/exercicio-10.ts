// NonNullable<T> remove null e undefined de um tipo.
// Util quando sabemos que um valor nao deve ser nulo em determinado trecho.

type ValorBusca = string | number | null | undefined;

// Depois de NonNullable, restam apenas string e number.
type ValorValido = NonNullable<ValorBusca>;

const valor: ValorValido = 42;

console.log(valor);
// 42