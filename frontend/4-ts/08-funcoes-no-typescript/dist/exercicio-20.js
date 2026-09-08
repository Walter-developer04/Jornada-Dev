"use strict";
// O que é?
// Múltiplas assinaturas para uma mesma função, com tipos diferentes.
function inverter(valor) {
    if (typeof valor === "string") {
        return valor.split("").reverse().join("");
    }
    if (typeof valor === "number") {
        return parseFloat(valor.toString().split("").reverse().join(""));
    }
}
console.log(inverter("abc"));
console.log(inverter(123));
