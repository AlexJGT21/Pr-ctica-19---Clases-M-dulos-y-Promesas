
import {saludar} from './Modulos.mjs'
import Persona from './Persona.mjs';
import Estudiante from './Estudiante.mjs';

//Ejercicio 1: Módulos (Export / Import)
console.log(saludar("Alex"));

//Ejercicio 2: Clases, Objetos y Herencia
let estudiante = new Estudiante();
estudiante.nombre = "Alejandro";
estudiante.carrera = "Ingenieria en software";

console.log(estudiante.saludar());
console.log(estudiante.estudiar());
console.log(estudiante.verPromedio());

let persona = new Persona("ALEJANDRO", 23);

console.log(persona.saludar());

//Ejercicio 3: Asincronía con Promesas
