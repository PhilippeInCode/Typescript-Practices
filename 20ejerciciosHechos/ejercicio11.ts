// Modificadores de acceso (public, private, protected)
class cuentaBancaria{
    private saldo: number;
    constructor(saldo:number){
        this.saldo = saldo;
    }
    public obtenerSaldo(saldo: number){
    return saldo;
    }
    public agregarFondos(saldo: number, saldoAgregado:number){
        return saldo + saldoAgregado;
    }
}

