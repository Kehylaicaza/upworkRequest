import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { AuthenService } from "../../services/authen.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { EmpresasService } from '../../services/empresas.service';
import { isError } from 'util';
import { empresa } from '../empresas/empresas';
import { user } from '../user/user';
import Swal from 'sweetalert2';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  response;
  usuario: user
  license_mensaje = ""
  userGoogle: SocialUser;
  loggedIn: boolean;
  public isError = false;
  public isErrorGoogle = false;
  public loginError = "";
  empresa1 = ""
  user = {
    email: '',
    password: ''

  }
  constructor(private authenService: AuthenService,
    private router: Router, private authService: AuthService, public empresasService: EmpresasService,) { }

  ngOnInit() {

    if ("maily" in localStorage && "empresaLegueada" in localStorage && "empresaLegueada" in localStorage && "token" in localStorage) {
      this.router.navigate(['dashboard'])
    } else {
      localStorage.removeItem('token');
      if ("maily" in localStorage) {
        localStorage.removeItem('maily');
      }
      if ("empresaLegueada" in localStorage) {
        localStorage.removeItem('empresaLegueada');
      }
      if ("empresaLegueada" in localStorage) {
        localStorage.removeItem('empresaLegueada');
      }
      this.traerUsuarios()
    }
    /* this.authService.authState.subscribe((userGoogle) => {
       this.userGoogle = userGoogle;
      // this.loggedIn = (userGoogle != null);
 
     });*/
  }

  traerUsuarios() {
    this.authenService.getUsers().subscribe(res => {
      this.authenService.usuarios = res as user[];
    })

  }

  signInWithGoogle(): void {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(socialusers => {
      this.userGoogle = socialusers;
      this.Savesresponse();

    });


  }

  signIn(f: NgForm) {
    //console.log(this.user);
    if (f.valid) {
      this.authenService.signIn(this.user)
        .subscribe(
          res => {
            if (res.user.status == "Activo") {
              localStorage.setItem('maily', res.user.email);
              localStorage.setItem('token', res.token);
              if (res.user.rol == "Usuario") {
                this.empresa1 = res.user.empresa[0].nombre
                this.empresasService.getOnlyEmpresa(this.empresa1).subscribe(res => {
                  let empresa: empresa = res as empresa
                  var moment = require('moment');
                  let currentMilli = Date.now()
                  let today = moment(currentMilli).format('YYYY-MM-DD');
                  if (moment(today).isBefore(empresa.license_begin)) {
                    this.license_mensaje = "Licencia vigente desde el " + empresa.license_begin
                    this.license()
                  }
                  else {
                    if (moment(today).isAfter(empresa.license_end)) {
                      this.license_mensaje = "Licencia caducada"
                      this.license()
                    } else {
                      if (empresa.usuarios_activos >= empresa.numUsuarios) {
                        this.fullCurrentUsers()
                      }
                      else {
                        empresa.usuarios_activos = empresa.usuarios_activos + 1
                        this.empresasService.updateEmpresas(empresa).subscribe(res => {
                          localStorage.setItem('empresaLegueada', this.empresa1);
                          this.router.navigate(['dashboard'])
                        })
                      }
                    }
                  }
                })
              } else if (res.user.rol == "Administrador") {
                this.router.navigate(['/interprise']);
              }
              else if (res.user.rol == "super-admin") {
                this.router.navigate(['dashboard'])
              }
            }
          },
          error => {
            this.isError = true;
            this.loginError = error.error;
            setTimeout(() => {
              this.isError = false;
            }, 5000);
          }
        );
    }
  }

  //para google
  Savesresponse() {
    this.authenService.Savesresponse(this.userGoogle)
      .subscribe(
        res => {
          localStorage.setItem('token', this.userGoogle.authToken);
          this.router.navigate(['/interprise']);
        },
        err => {
          this.isErrorGoogle = true;
          this.loginError = "Cuenta no asociada";
          setTimeout(() => {
            this.isErrorGoogle = false;
          }, 4000);
        }
      )
  }
  /* signOut(): void {
     this.authService.signOut();
   }*/

  fullCurrentUsers() {
    Swal.close()
    let timerInterval
    Swal.fire({
      title: 'Ooopss',
      html: 'Has excedido el número de usuarios concurrentes en esta empresa.',
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
        this.authenService.logoutTimer()
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
        this.authenService.logoutTimer()
      }
    })
  }
}
