// O que é?
// Quando uma função tem sobrecargas (overloads), cada assinatura do destino 
// deve ter uma correspondente compatível na origem.
// A origem pode ter assinaturas extras.

type TargetOverload = {
  (x: number): string;
  (x: string): number;
};

type SourceOverload = {
  (x: number): string;
  (x: string): number;
  (x: boolean): boolean;
};

let source: SourceOverload = {} as any;
let target: TargetOverload;

// OK: 'source' possui todas as assinaturas exigidas por 'target'.
target = source;
