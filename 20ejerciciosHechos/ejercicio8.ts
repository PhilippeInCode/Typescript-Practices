// Intersección de tipos
type Empleado = {
    salario: number;
}

type Usuario = {
    email: string;
}

type EmpleadoUsuario = Empleado & Usuario;

const empleadoUsuario1: EmpleadoUsuario = {
    salario: 1000,
    email: "empleadousuarioexcelente@proton.me"
}