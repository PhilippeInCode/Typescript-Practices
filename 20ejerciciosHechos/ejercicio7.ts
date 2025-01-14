// Unión de tipos
function mostrarResultado(texto:string, numero:number):string{
    if(typeof texto === 'number' || typeof numero === 'number'){
        return `El resultado es: [valor]`;
    } else {
        return `El resultado es: ${texto}`;
    }
}
console.log(mostrarResultado('Hola', 5));