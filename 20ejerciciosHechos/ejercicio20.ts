// Manipulación de tipos avanzados
type uusuario = {
    id: number;
    nombre: string;
};

type ClavesUsuario = keyof uusuario;
const ejemploUsuario = { id: 1, nombre: 'Ana' };

type TipoEjemploUsuario = typeof ejemploUsuario;
const clave: ClavesUsuario = 'id'; 

console.log('Claves de Usuario:', clave);
console.log('Tipo basado en typeof:', ejemploUsuario);
