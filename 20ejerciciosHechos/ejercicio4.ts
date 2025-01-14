// Interfaces
interface Producto{
    id: string;
    nombre: string;
    precio: number;
}

let Producto1: Producto = {
    id: "1",
    nombre: "Bifrutas",
    precio: 100.000
}

console.log(Producto1); // { id: '1', nombre: 'Bifrutas', precio: 100 }