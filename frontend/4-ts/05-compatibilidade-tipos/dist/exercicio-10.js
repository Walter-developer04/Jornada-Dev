"use strict";
// O que é?
// Enums são compatíveis com números e vice-versa.
// Porém, enums de tipos diferentes são estritamente incompatíveis entre si.
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let s = Status.Ready;
// OK: Enums aceitam seus valores numéricos base.
s = 1;
// Erro esperado: Valores de enums diferentes não são intercambiáveis.
// s = Color.Green;
