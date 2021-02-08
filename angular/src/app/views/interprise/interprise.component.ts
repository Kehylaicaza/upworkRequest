import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../services/authen.service';
import { user } from '../user/user';
import { empresa } from '../empresas/empresas';
import { EmpresasService } from '../../services/empresas.service';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-interprise',
  templateUrl: './interprise.component.html',
  styleUrls: ['./interprise.component.scss']
})
export class InterpriseComponent implements OnInit {
  correo: string = ""
  empresa1: string = ""
  empresa2: string = ""
  empresa3: string = ""
  license_mensaje =""
  empresasUsuario: empresa[] = []
  arregloVariables = []
  empresas = []
  user = {
    _id: '',
    name: '',
    lastname: '',
    email: '',
    image: '',
    rol: ''
  }
  usuarioLogueado: user

  constructor(public authService: AuthenService, private router: Router, public empresasService: EmpresasService) { }

  ngOnInit() {
    this.crearPerfil()
  }

  crearPerfil() {

    if (localStorage.getItem("maily") != '') {
      this.correo = localStorage.getItem("maily");

    }
    /*
    this.authService.returnUserRol().subscribe((ordenes: user[]) => {
      new Promise<any>((resolve, reject) => {
        ordenes.forEach((nt) => {

          if (nt.email == this.correo) {
            this.usuarioLogueado = nt
            this.user._id = nt._id
            this.user.name = nt.name;
            this.user.rol = nt.rol
           
          }

        })

      })
    })*/
    this.cargarUsuarioLogueado()

  }


  cargarUsuarioLogueado() {
    const promesaUser = new Promise((res, err) => {
      if (localStorage.getItem("maily") != '') {
        //this.correo = localStorage.getItem("maily");
        this.correo = localStorage.getItem("maily");

        this.authService.getUserLogueado(this.correo)
          .subscribe(
            res => {
              this.usuarioLogueado = res as user;
              this.empresasUsuario = this.usuarioLogueado[0].empresa

              this.crearMenu()
            },
            err => {
            }
          )
      }
    });
    promesaUser.then(() => {

    });

  }

  crearMenu() {

    if (this.usuarioLogueado[0].rol == "super-admin") {
      //alert("entre por verdadero")
      localStorage.setItem('empresaLegueada', this.empresasUsuario[0].nombre);
      this.router.navigate(['dashboard'])
    } else if (this.usuarioLogueado[0].rol == "Usuario") {
      // console.log("usuario es "+ this.empresasUsuario[0].nombre)
      this.empresa1 = this.empresasUsuario[0].nombre
      localStorage.setItem('empresaLegueada', this.empresa1);
      this.empresasService.getOnlyEmpresa(this.empresa1).subscribe(res => {
        let empresa: empresa = res as empresa
       
        if (empresa.usuarios_activos >= empresa.numUsuarios) {
          this.fullCurrentUsers()
          
        }
        else {
          empresa.usuarios_activos = empresa.usuarios_activos+1
          this.empresasService.updateEmpresas(empresa).subscribe(res => {
            this.router.navigate(['dashboard'])
          })

        }
      })

    }
    else {

      var conti = 0

      this.empresasUsuario.forEach(element => {

        let _id = element.nombre

        this.empresasService.getOnlyEmpresa(_id)
          .subscribe(
            res => {
              conti++
              this.empresas.push(res)

              if (conti == this.empresasUsuario.length) {

                var x = document.getElementById("num1");
                var y = document.getElementById("num2");
                var z = document.getElementById("num3");
                switch (this.empresas.length) {
                  case 1:
                    x.style.display = "block";
                    this.empresa1 = this.empresas[0].nombre
                    break;
                  case 2:
                    y.style.display = "block";
                    this.empresa1 = this.empresas[0].nombre
                    this.empresa2 = this.empresas[1].nombre
                    break;
                  case 3:
                    z.style.display = "block";
                    this.empresa1 = this.empresas[0].nombre
                    this.empresa2 = this.empresas[1].nombre
                    this.empresa3 = this.empresas[2].nombre
                    break;
                  default:
                    break;
                }
              }
            },
            err => {
            }
          )
      });








    }


  }



  ingresarEmpresa(i: number) {
    var _id = ""
    switch (i) {
      case 1:
        _id = this.empresas[0]._id
        localStorage.setItem('empresaLegueada', _id);
        this.empresasService.getOnlyEmpresa(_id).subscribe(res => {
          let empresa: empresa = res as empresa
          var moment = require('moment');
          let currentMilli = Date.now()
          let today = moment(currentMilli).format('YYYY-MM-DD');

          if(moment(today).isBefore(empresa.license_begin) ){
            this.license_mensaje="Licencia vigente desde el " +empresa.license_begin
            this.license()
          
          }
          else{
            if(moment(today).isAfter(empresa.license_end) ){
              this.license_mensaje="Licencia caducada" 
              this.license()
              
            }else{
              if (empresa.usuarios_activos <= empresa.numUsuarios) {
                empresa.usuarios_activos = empresa.usuarios_activos+1
    
                this.empresasService.updateEmpresas(empresa).subscribe(res => {
                  this.router.navigate(['dashboard'])
                })
    
              }
              else {
                this.fullCurrentUsers()
    
              }
            }
          }
        
        })


        break;
      case 2:
        _id = this.empresas[1]._id
        localStorage.setItem('empresaLegueada', _id);
        this.empresasService.getOnlyEmpresa(_id).subscribe(res => {
          let empresa: empresa = res as empresa
          var moment = require('moment');
          let currentMilli = Date.now()
          let today = moment(currentMilli).format('YYYY-MM-DD');

          if(moment(today).isBefore(empresa.license_begin) ){
            this.license_mensaje="Licencia vigente desde el " +empresa.license_begin
            this.license()
          
          }
          else{
            if(moment(today).isAfter(empresa.license_end) ){
              this.license_mensaje="Licencia caducada" 
              this.license()
              
            }else{
              if (empresa.usuarios_activos <= empresa.numUsuarios) {
                empresa.usuarios_activos = empresa.usuarios_activos+1
    
                this.empresasService.updateEmpresas(empresa).subscribe(res => {
                  this.router.navigate(['dashboard'])
                })
    
              }
              else {
                this.fullCurrentUsers()
    
              }
            }
          }
        
        })
        break;
      case 3:
        _id = this.empresas[2]._id
        localStorage.setItem('empresaLegueada', _id);
        this.empresasService.getOnlyEmpresa(_id).subscribe(res => {
          let empresa: empresa = res as empresa
          var moment = require('moment');
          let currentMilli = Date.now()
          let today = moment(currentMilli).format('YYYY-MM-DD');

          if(moment(today).isBefore(empresa.license_begin) ){
            this.license_mensaje="Licencia vigente desde el " +empresa.license_begin
            this.license()
          
          }
          else{
            if(moment(today).isAfter(empresa.license_end) ){
              this.license_mensaje="Licencia caducada" 
              this.license()
              
            }else{
              if (empresa.usuarios_activos <= empresa.numUsuarios) {
                empresa.usuarios_activos = empresa.usuarios_activos+1
    
                this.empresasService.updateEmpresas(empresa).subscribe(res => {
                  this.router.navigate(['dashboard'])
                })
    
              }
              else {
                this.fullCurrentUsers()
    
              }
            }
          }
        
        })
        break;
      default:
        break;
    }
  }

  fullCurrentUsers() {
    Swal.close()
    let timerInterval
    Swal.fire({
      title: 'Ooopss',
      html: 'Has excedido el número de usuarios concurrentes en esta empresa.',
      icon: 'error',
      timer: 3000,
      timerProgressBar: true,
      allowOutsideClick:false,
      backdrop: `
      rgba(5,3,29,1)
      left top
      no-repeat
    `,
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
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('*************Fin de la Sesión***************')
        console.log('*************You are loved***************')
        this.authService.logoutTimer()
      }
    })

  }

  license() {
    Swal.close()
    let timerInterval
    Swal.fire({
      title: 'Ooopss',
      html: this.license_mensaje,
      icon: 'error',
      timer: 3000,
      timerProgressBar: true,
      allowOutsideClick: false,
      backdrop: `
      rgba(5,3,29,1)
      left top
      no-repeat
    `,
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
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('*************Fin de la Sesión***************')
        console.log('*************You are loved***************')
        this.authService.logoutTimer()
      }
    })

  }

}
