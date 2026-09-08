"use strict";
// O que é?
// typeof null retorna "object" em JavaScript (bug histórico).
// Por que importa?
// Isso pode causar problemas quando você faz narrowing usando typeof.
// Comportamento:
// Se uma variável pode ser null, typeof === "object" não remove null.
function printAll(strs) {
    if (typeof strs === "object") {
        // strs ainda pode ser string[] | null
        // O TypeScript avisa: 'strs' is possibly 'null'
        if (strs !== null) {
            for (const s of strs) {
                console.log(s);
            }
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAll(["a", "b", "c"]);
printAll("texto");
printAll(null);
