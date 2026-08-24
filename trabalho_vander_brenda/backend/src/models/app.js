import {Produto} from './models/produto.js';

const p = new Produto(5, "Guitarra");
const p2 = new Produto(6, "Cordas 09");

console.log(p.nome);
console.log(p2);
console.log(p.info())
p.ativo = false;
console.log(p.info())

import {Genero,Usuario} from './models/Usuario.js';
const u1 = new Usuario(1,"Cezar","123","2000-01-25T00:00:00",Genero.M);

console.log();
console.log(u1.perfil());
console.log(u1);