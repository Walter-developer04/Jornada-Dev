// O que é?
// Enums são compatíveis com números e vice-versa.
// Porém, enums de tipos diferentes são estritamente incompatíveis entre si.

enum Status { Ready, Waiting }
enum Color { Red, Blue, Green }

let s: Status = Status.Ready;

// OK: Enums aceitam seus valores numéricos base.
s = 1; 

// Erro esperado: Valores de enums diferentes não são intercambiáveis.
// s = Color.Green;
