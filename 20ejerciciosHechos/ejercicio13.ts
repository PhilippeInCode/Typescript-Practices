// Genéricos

function revertirArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

const numeros: number[] = [1, 2, 3, 4, 5];
const numerosInvertidos = revertirArray(numeros);
console.log(numerosInvertidos); 

const cadenas: string[] = ["a", "b", "c", "d"];
const cadenasInvertidas = revertirArray(cadenas);
console.log(cadenasInvertidas); 
