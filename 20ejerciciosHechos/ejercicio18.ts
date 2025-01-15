// Casting de tipos
let valor: any = 'Hola TypeScript';

const longitud: number = (valor as string).length;

console.log(`La longitud de la cadena es: ${longitud}`);
