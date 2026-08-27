const usuario1 = {
    nome: "Ana"
};

const usuario2 = {
    nome: "Carlos"
};
a
const usuarios = new WeakSet();

usuarios.add(usuario1);
usuarios.add(usuario2);

console.log(usuarios.has(usuario1));
console.log(usuarios.has(usuario2));
