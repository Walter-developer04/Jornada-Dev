"use strict";
// O que é?
// TypeScript 5.5+ pode inferir type predicates automaticamente.
function makeBirdCalls(countries) {
    // birds: Bird[] (não mais (Bird | undefined)[])
    const birdsReal = countries
        .map(country => birds.get(country))
        .filter(bird => bird !== undefined);
    for (const bird of birdsReal) {
        bird.sing(); // OK! TypeScript sabe que bird é Bird
    }
}
// A função filter infere: (bird: Bird | undefined) => bird is Bird
