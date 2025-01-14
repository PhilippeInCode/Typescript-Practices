// Clases y constructores
class Animal {
    public nombre: string;
    constructor(nombre:string = "Mike"){
        this.nombre = nombre;
    }
    hacerSonido(){
        return "Sonido genérico";
    }
}

const animal = new Animal();
console.log(animal.nombre);      
console.log(animal.hacerSonido()); 