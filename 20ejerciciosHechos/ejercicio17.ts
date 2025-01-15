// Control de flujo con `never` y `unknown`
function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}

function analizarTipo(valor: unknown): void {
    if (typeof valor === 'number') {
        console.log('Es un número:', valor);
    } else if (typeof valor === 'string') {
        console.log('Es una cadena:', valor);
    } else {
        console.log('Tipo desconocido:', valor);
    }
}

try {
    analizarTipo(42);         
    analizarTipo('Hola');    
    analizarTipo(true);   
    lanzarError('¡Hola Typescript!'); 
} catch (error) {
    if (error instanceof Error) {
        console.error('Error capturado:', error.message);
    } else {
        console.error('Error desconocido:', error);
    }
}
