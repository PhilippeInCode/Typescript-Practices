// Módulos
import { PI } from './constantes';

function calcularAreaCirculo(radio: number): number {
    return PI * radio * radio;
}

const radio = 5;
const area = calcularAreaCirculo(radio);

console.log(`El área de un círculo con radio ${radio} es: ${area}`);
