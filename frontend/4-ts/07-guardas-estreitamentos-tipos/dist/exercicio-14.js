"use strict";
// O que é?
// == null verifica tanto null quanto undefined simultaneamente.
function multiplyValue(container, factor) {
    // Remove tanto null quanto undefined
    if (container.value != null) {
        // container.value é number
        console.log(container.value);
        container.value *= factor;
    }
}
const c1 = { value: 10 };
const c2 = { value: null };
const c3 = { value: undefined };
multiplyValue(c1, 2);
multiplyValue(c2, 2);
multiplyValue(c3, 2);
