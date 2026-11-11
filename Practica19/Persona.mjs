
export default class Persona {
    constructor(nombre = "", edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = this.#generarId();
    }
    //Con esto se vuelve la función privada, no se puede acceder desde fuera de la clase.
    #generarId() {
        return Math.floor(Math.random() * 1000);
    }

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}