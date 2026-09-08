"use strict";
// O que é?
// Membros 'private' e 'protected' forçam uma verificação nominal.
// Para serem compatíveis, os membros privados/protegidos devem ter a mesma origem.
class PrivateA {
    secret = "A";
}
class PrivateB {
    secret = "B";
}
let a;
let b;
// Erro esperado:
// Os tipos têm declarações separadas para a propriedade privada 'secret'.
// Eles não vêm da mesma hierarquia de classes, logo são incompatíveis.
// a = b;
