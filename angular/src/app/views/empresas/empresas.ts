

export class empresa{
    _id:string
    nombre:string
    representante:string
    direccion:string
    ruc:string
    email_empresarial:string
    email_administrador:string
    numUsuarios:number
    contrasena:string
    usuarios_activos:number
    license_begin:string
    license_end:string
    constructor(){
        this.numUsuarios=0
    }
}