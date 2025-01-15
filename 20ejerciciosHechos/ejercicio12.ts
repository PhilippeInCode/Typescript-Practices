// Herencia

class Vehiculo{
    public marca: string;

    constructor(marca: string = "BMW"){
        this.marca = marca;
    }
    encender(){
        return "Vehículo encendido";
    }
}

class Auto extends Vehiculo{
    public puertas: number;

    constructor(puertas: number, marca: string = "BMW"){
        super(marca);
        this.puertas = puertas;
    }
    abrirPuertas(puertas: number){
        return `Abriendo ${puertas} puertas`;
    }
}