// Decoradores
function logClase(constructor: Function): void {
    console.log(`Clase registrada: ${constructor.name}`);
}
class Ejemplo {
    constructor() {
        console.log('Instancia de Ejemplo creada.');
    }
}

const instancia = new Ejemplo();
