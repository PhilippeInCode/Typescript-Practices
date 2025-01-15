// Utilidad de tipos (Partial, Readonly, etc.)
type usuario = {
    id: number;
    nombre: string;
    email: string;
};

const usuarioParcial: Partial<usuario> = {};
usuarioParcial.nombre = 'Juan'; 

const usuarioInmutable: Readonly<usuario> = {
    id: 1,
    nombre: 'Pedro',
    email: 'pedro@example.com',
};

console.log('Usuario Parcial:', usuarioParcial);
console.log('Usuario Inmutable:', usuarioInmutable);
