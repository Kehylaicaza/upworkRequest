import { Timestamp } from 'rxjs'
import { Role } from "../../containers/default-layout/role"
import { empresa } from '../empresas/empresas'


export class user{
    _id:string
    name:string
    user:string
    password:string
    email:string
    cedula:string
    username:string
    rol:Role
    idGrupo:string
    empresa:empresa[]=[]
    numUsuarios:number
    status:string
    imageProfile:string
    constructor(){
       
    }
}


export class user2{
    _id:string
    name:string
    user:string
    password:string
    email:string
    cedula:string
    username:string
    rol:Role
    idGrupo:string
    empresa:[]=[]
    numUsuarios:number
    status:string
    imageProfile:string
    constructor(){
       
    }
}