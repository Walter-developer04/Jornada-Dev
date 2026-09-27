// Global Augmentation: adicionar membros ao escopo global
// Sempre exige contexto de modulo. export {} torna este arquivo um modulo.
export {};

declare global {
    // Ampliando a interface global String (existente no TypeScript)
    interface String {
        primeiroMaiusculo(): string;
    }
}

// Implementacao real do metodo adicionado
String.prototype.primeiroMaiusculo = function (): string {
    const texto: string = String(this);
    return texto.charAt(0).toUpperCase() + texto.slice(1);
};

// Uso: o TypeScript agora reconhece o metodo em qualquer string
console.log("typescript".primeiroMaiusculo()); // Typescript