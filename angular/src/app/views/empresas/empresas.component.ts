
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { DxListModule, DxListComponent } from "devextreme-angular";
import { element } from 'protractor';
import { EmpresasService } from '../../services/empresas.service';
import { empresa } from './empresas';
import { AuthenService } from '../../services/authen.service';
import { UserService } from '../../services/user.service';
import notify from 'devextreme/ui/notify';
import swal from 'sweetalert2';
import { user } from '../user/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})


export class EmpresasComponent implements OnInit {

  empresa = {
    _id: '',
    nombre: '',
    representante: '',
    direccion: '',
    ruc: '',
    email_empresarial: '',
    email_administrador: '',
    contrasena: '',
    numUsuarios: 0,
    usuarios_activos: 0,
    license_begin: null,
    license_end: null,
  }

  empresa2 = {
    _id: '',
    nombre: '',
    representante: '',
    direccion: '',
    ruc: '',
    email_empresarial: '',
    email_administrador: '',
    contrasena: '',
    numUsuarios: 0,
    usuarios_activos: 0,
    license_begin: null,
    license_end: null,
  }

  popupVisible: boolean = false
  usuarioNuevo = {
    name: 'ADMIN',
    password: '',
    email: '',
    rol: '',
    grupo: '',
    empresa: '',
    numUsuarios: 0,
    status: 'Activo'
  }

  rol = ''
  //usuarioNuevo : user
  nombreEmpresa: string = ""
  selectionModeValue: string = "multiple";
  selectedItems: string[];
  nombreGrupo: string = ""
  /* menuPermisos: string[] = [
    "Ver documentos",
    "Compartir documentos",
    "Borrar documentos",
    "Agregar documentos",
    "Mover documentos",
    
  ]; */
  @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
  constructor(public empresasService: EmpresasService, public authenService: AuthenService, public router: Router, public userService: UserService) {
    //  this.empresa= new empresa
  }

  ngOnInit() {

    /*  this.authenService.returnUserRol().subscribe((ordenes: user[]) => {
        new Promise<any>((resolve, reject) => {
          ordenes.forEach((nt) => {
            this.rol = nt.rol
           if(this.rol == "Usuario"){
            this.router.navigate(['/not-Authorized']);
          }
         
          })
        })
      })*/

    this.traerEmpresas()

  }

  register(f: NgForm) {

    this.validarEmpresa()
    /*  console.log("voy a enviar "+JSON.stringify(this.empresa))
    this.empresasService.newEmpresa(this.empresa)
       .subscribe(
         res=> alert("sss")
          
         ,
         err => console.log(err)
       )
     this.registrarUsuario() */
  }

  validarEmpresa() {
    var cont = 0
    this.empresasService.empresa.forEach(element => {
      if (this.empresa.nombre == element.nombre) {
        cont++
        Swal.fire(
          'Error',
          'Ese nombre de empresa ya existe',
          'error'
        )
      }
    })

    if (cont == 0) {
      this.validarCampos()
    }
  }


  validarCampos() {
    // console.log("entre por qaui ")
    //  console.log(JSON.stringify(this.empresa))

    if (this.empresa.nombre != "" && this.empresa.direccion != ""
      && this.empresa.numUsuarios != 0 && this.empresa.ruc != "" && this.empresa.license_begin != null && this.empresa.license_end != null) {
      //alert("esta lleno")
      this.mensajeGuardando()
      // console.log("voy a enviar "+JSON.stringify(this.empresa))
      this.empresasService.newEmpresa(this.empresa)
        .subscribe(
          res => { this.mensajeCorrecto() }
          ,
          err => console.log(err + "entre por error")
        )
      // this.registrarUsuario()
    } else {
      //notify("Hay campos vacios");

      Swal.fire(
        'Hay campos vacíos',
        'Revise e intente nuevamente',
        'error'
      )
    }
  }

  mensajeGuardando() {
    Swal.close()
    let timerInterval
    Swal.fire({
      title: 'Guardando',
      html: 'Procesando',
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')

          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    })
  }

  mostrarUpdateEmpresa = (e) => {
    this.mostrarEdit(e.row.data)
  }

  mostrarEdit(e: any) {
    // this.empresa2= e

    this.empresa2._id = e._id
    this.empresa2.nombre = e.nombre
    this.empresa2.representante = e.representante
    this.empresa2.direccion = e.direccion
    this.empresa2.ruc = e.ruc
    this.empresa2.email_empresarial = e.email_empresarial
    this.empresa2.email_administrador = e.email_administrador
    this.empresa2.contrasena = e.contrasena
    this.empresa2.numUsuarios = e.numUsuarios
    this.empresa2.license_begin = e.license_begin
    this.empresa2.license_end = e.license_end

    var x = document.getElementById("read");
    var y = document.getElementById("new");
    var z = document.getElementById("edit");
    z.style.display = "block";
    x.style.display = "none";
    y.style.display = "none";

  }

  mostrarPopup(e: any) {

    // this.empresa= e

    this.empresa._id = e._id
    this.empresa.nombre = e.nombre
    this.empresa.representante = e.representante
    this.empresa.direccion = e.direccion
    this.empresa.ruc = e.ruc
    this.empresa.email_empresarial = e.email_empresarial
    this.empresa.email_administrador = e.email_administrador
    this.empresa.contrasena = e.contrasena
    this.empresa.numUsuarios = e.numUsuarios



    this.popupVisible = true
  }

  deleteEmpresa = (e) => {
    this.userService.getUsersbyEmpresa(e.row.data._id).subscribe(res => {
      let arrayUsers = res as []

      if (arrayUsers.length > 0) {
        this.mensajeErrorNoReload()
      } else {
        this.mensajeConfirmacion(e.row.data)
      }
    }
    )



  }

  mensajeConfirmacion(e: any) {
    Swal.fire({
      title: 'Advertencia',
      text: "Desea eliminar la empresa " + e.nombre,
      icon: 'warning',
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value)
        this.deleteEmpresas(e)
      //console.log(result)

    })
  }


  mensajeCorrecto() {
    Swal.close()
    Swal.fire({
      title: 'Enhorabuena',
      text: 'Se ha creado empresa con éxito',
      icon: 'success',
      allowOutsideClick: false,
      confirmButtonText: 'Ok'
    }).then((result) => {
      window.location.reload()
    })
  }

  mensajeError() {
    Swal.fire({
      title: 'Ooopss',
      text: 'Se ha producido un error al guardar',
      icon: 'error',
      allowOutsideClick: false,
      confirmButtonText: 'Ok'
    }).then((result) => {
      window.location.reload()
    })
  }

  mensajeErrorNoReload() {
    Swal.fire({
      title: 'Ooopss',
      text: 'Existen usuarios asignados a esta empresa ',
      icon: 'error',
      allowOutsideClick: false,
      confirmButtonText: 'Ok'
    }).then((result) => {
      // window.location.reload()
    })
  }

  registrarUsuario() {
    this.usuarioNuevo.email = this.empresa.email_administrador
    this.usuarioNuevo.password = this.empresa.contrasena
    this.usuarioNuevo.rol = "Administrador"
    this.usuarioNuevo.empresa = this.empresa.nombre
    this.usuarioNuevo.name = "ADMIN"
    this.usuarioNuevo.numUsuarios = this.empresa.numUsuarios

    this.userService.newUser(this.usuarioNuevo)
      .subscribe(
        res => {
          console.log(res + "hecho");
        },
        err => console.log(err + "entre por error")
      )
  }

  buscarEmpresa(e) {
    this.empresasService.empresa.forEach(element => {
      if (this.nombreEmpresa == element.nombre) {
        this.empresa._id = element._id
        this.empresa.nombre = element.nombre
        this.empresa.direccion = element.direccion
        this.empresa.email_administrador = element.email_administrador
        this.empresa.email_empresarial = element.email_empresarial
        this.empresa.numUsuarios = element.numUsuarios
        this.empresa.representante = element.representante
        this.empresa.ruc = element.ruc
        this.empresa.contrasena = element.contrasena
      }
    })
  }


  traerEmpresas() {
    var empresas = []
    var loge = ""
    if (localStorage.getItem("empresaLegueada") != '') {
      loge = localStorage.getItem("empresaLegueada");
      //  console.log("2222 "+this.correo)
    }
    this.empresasService.getEmpresas().subscribe(res => {
      this.empresasService.empresa = res as empresa[];


      //console.log('getLineagrafica', res);
    })
  }

  updateEmpresas() {
    this.popupVisible = false

    this.mensajeGuardando
    // console.log("entre a actualizar "+ JSON.stringify(this.empresa2))
    this.empresasService.updateEmpresas(this.empresa2).subscribe(
      res => {
        console.log(); this.mensajeUpdate()
      },
      err => console.log(err)
    )
  }

  deleteEmpresas(e: any) {
    this.empresa = e
    this.mensajeGuardando()
    this.empresasService.deleteEmpresas(this.empresa).subscribe(
      res => {
        console.log(); this.mensajeEliminado()
      },
      err => { console.log(err); this.mensajeError() }
    )
  }

  mensajeUpdate() {
    Swal.close()
    Swal.fire({
      title: 'Enhorabuena',
      text: 'Se ha actualizado con éxito',
      icon: 'success',
      allowOutsideClick: false,
      confirmButtonText: 'Ok'
    }).then((result) => {
      window.location.reload()
    })
  }

  mensajeEliminado() {
    swal.close()
    Swal.fire({
      title: 'Enhorabuena',
      text: 'Se ha eliminado empresa con éxito',
      icon: 'success',
      allowOutsideClick: false,
      confirmButtonText: 'Ok'
    }).then((result) => {
      window.location.reload()
    })
  }






  mostrar(i: number) {
    this.empresa.representante = ''
    this.empresa.ruc = ''
    this.empresa.nombre = ''
    this.empresa.contrasena = ''
    this.empresa.direccion = ''
    this.empresa.numUsuarios = 0
    this.empresa.license_begin = null
    this.empresa.license_end = null
    this.empresa.email_empresarial = ''
    this.empresa.email_administrador = ''
    var x = document.getElementById("read");
    var y = document.getElementById("new");
    var z = document.getElementById("edit");
    switch (i) {
      case 1:
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        break;

      case 2:
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        break;

      case 3:
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        break;
      default:
    }
  }

}