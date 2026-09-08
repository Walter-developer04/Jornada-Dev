// O que é?
// TypeScript possui duas noções de compatibilidade: 'subtipo' e 'atribuição'.
// 'Atribuição' estende 'subtipo' para permitir conversões de/para 'any' e de/para 'enum' com números.

let x: any = "texto";
let y: string;

// OK na 'atribuição' (de any para string), mas não seria aceito como 'subtipo' estrito.
y = x;

// Em cláusulas 'extends' ou 'implements', o TS geralmente usa a verificação de subtipo.
