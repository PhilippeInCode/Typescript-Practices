/*
 * A partir del ejercicio anterior deberá sacar 2 clases con
 * una padre de la cual heredar factores comunes.
 *
 * Deberás crear una clase para contemplar un rectángulo y un triángulo con dos * propiedades:
 * 1 → Base
 * 2 → Altura
 *
 * También deberá tener un método para calcular el área en el rectángulo:
 *(Base*Altura) y en el triángulo: ((Base*Altura)/2)
 */

// Clase Figura que será una clase padre de la que hereda cada figura


class Figura {
    public base: number;
    public altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }
}

// Clase Rectangulo que hereda de Figura


class rectangulo extends Figura {
    constructor(base: number, altura: number){
        super(base, altura);
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

// Clase Triangulo que hereda de Figura


class Triangulo extends Figura {
    constructor(base: number, altura: number){
        super(base, altura);
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

// Ejemplo de uso
const rectangulo1 = new rectangulo(5, 10);
console.log(rectangulo1.calcularArea()); // 50

const triangulo1 = new Triangulo(5, 10);
console.log(triangulo1.calcularArea()); // 25

