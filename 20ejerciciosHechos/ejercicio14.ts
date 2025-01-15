// Tuplas
type coordenadas = [number, number];

function imprimirCoordenadas(coordenadas: coordenadas): void {
    const [x, y] = coordenadas; 
    console.log(`(${x}, ${y})`);
}

const punto1: coordenadas = [9, 10];
const punto2: coordenadas = [0, 0];
const punto3: coordenadas = [-2, 2];

imprimirCoordenadas(punto1); 
imprimirCoordenadas(punto2); 
imprimirCoordenadas(punto3); 