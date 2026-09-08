"use strict";
// O que é?
// instanceof faz narrowing tanto no if quanto no else.
// Para que serve?
// O TypeScript sabe o tipo em ambos os branches.
// Comportamento:
// if (x instanceof A) { /* x é A */ } else { /* x não é A */ }
class Email {
    enviar() {
        console.log("Enviando email");
    }
}
class SMS {
    enviar() {
        console.log("Enviando SMS");
    }
}
function enviarMensagem(msg) {
    if (msg instanceof Email) {
        // msg é Email
        msg.enviar();
    }
    else if (msg instanceof SMS) {
        // msg é SMS
        msg.enviar();
    }
    else {
        // msg é string
        console.log(msg);
    }
}
enviarMensagem(new Email());
enviarMensagem(new SMS());
enviarMensagem("mensagem de texto");
