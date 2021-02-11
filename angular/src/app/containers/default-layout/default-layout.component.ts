import { SocketOnlineService } from './../../services/socket-online.service';
import { Component, OnInit } from '@angular/core';
import { navItems, navItemsAdmin, navItemsSuper } from '../../_nav';
import { AuthenService } from "../../services/authen.service";
import { user, user2 } from '../../views/user/user';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notifications.service';
import { element } from 'protractor';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.css']
})
export class DefaultLayoutComponent implements OnInit {


  public sidebarMinimized = false;
  public navItems = navItems;
  public navItemsAdmin = navItemsAdmin;
  public navItemsSuper = navItemsSuper;
  usuarioLogueado: user
  idEmpresa = false
  empresa2 = ""
  notificationViews = []
  notification = []
  totalNotificaciones = 0
  less7:boolean =false
  greater7:boolean =false
  imagePath
  user = {
    _id: '',
    name: '',
    lastname: '',
    email: '',
    image: '',
    rol: ''
  }
  usuarios: user[] = []
  usuariologeado: user;
  correo: string = '';

  constructor(
    public authService: AuthenService, private _sanitizer: DomSanitizer, private router: Router, public notiService: NotificationsService,
    private socketOnlineService: SocketOnlineService
  ) { }

  ngOnInit() {
    /* this.traerUsuarios()
     if (localStorage.getItem("maily") != '') {
       this.correo = localStorage.getItem("maily");
       console.log("jeje k me ves" + this.correo);
       this.buscarUsuario();
       //this.asignarDatos();
     }*/
    this.crearPerfil()
    if (localStorage.getItem("empresaLegueada") != '') {
      this.idEmpresa = true
      this.socketOnlineService.emitLogin(localStorage.getItem("empresaLegueada"));
    }

  }

  crearPerfil() {

    if (localStorage.getItem("maily") != '') {
      this.correo = localStorage.getItem("maily");

    }
    this.authService.returnUserRol().subscribe((ordenes: user[]) => {
      new Promise<any>((resolve, reject) => {
        ordenes.forEach((nt) => {

          if (nt.email == this.correo) {
            this.usuarioLogueado = nt
            this.user._id = nt._id
            this.user.name = nt.name;
            this.user.rol = nt.rol
            this.imagePath = "../../../assets/img/brand/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
            this.traerEmpresas()
          }

        })

      })
    })

  }

  leerPermisos() {

  }

  cargarUsuarioLogueado() {
    const promesaUser = new Promise((res, err) => {
      if (localStorage.getItem("maily") != '') {
        this.correo = localStorage.getItem("maily");
        // console.log("2222 " + this.correo)
      }
      this.authService.getUserLogueado(this.correo)
        .subscribe(
          res => {
            this.usuarioLogueado = res as user;

          },
          err => {
          }
        )
    });
  }

  /* async traerUsuarios() {
     console.log("traer usuarios");
     await this.authService.getUsers().subscribe((ordenes: user[]) => {
       new Promise<any>((resolve, reject) => {
         ordenes.forEach((nt) => {
           this.authService.usuarios.push(nt);
         })
         this.buscarUsuario();
       })
     })
   }*/

  buscarUsuario() {
    this.authService.usuarios.forEach(element => {
      if (element.email == this.correo) {
        this.user.name = element.name;
        this.imagePath = "../../../assets/img/brand/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
      }
    })
  }

  asignarDatos() {
    this.user.name = this.usuariologeado.name;

  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  traerEmpresas() {
    this.usuarioLogueado.empresa.forEach(element => {
      var empresa = localStorage.getItem("empresaLegueada");
      if (empresa != element.nombre) {
        this.empresa2 = "Cambiar a " + element.nombre
      }

    });
    this.getNotifications()
  }


  ver(p: any) {

    for (let index = 0; index < p.array_activity.length; index++) {

      if (p.array_activity[index].user_id == this.user._id) {

        p.array_activity[index].read = true

        this.notiService.update(p).subscribe(res => {
          let tipo = p.tipo
          
          switch (tipo) {
            case "documento":
              
              this.router.navigate(["visor", p.enlace, p.clase_id, p.doc_id, p.tipoDoc]);
              break;

            case "bulk":
              this.router.navigate(["listar-documentos",p.clase_id,]);
              break;

            case "Deleted":
              this.router.navigate(["listar-documentos",p.clase_id,]);
              break;

            case "Version":
              this.router.navigate(["visor", p.enlace, p.clase_id, p.doc_id, p.tipoDoc]);
              break;

            default:
              this.router.navigate(["visor", p.enlace, p.clase_id, p.doc_id, p.tipoDoc]);
              break;
          }
         

        })
      }

    }




  }


  eliminar(p: any) {
    for (let index = 0; index < p.array_activity.length; index++) {
      if (p.array_activity[index].user_id == this.user._id) {

        p.array_activity[index].read = true
        this.notiService.update(p).subscribe(res => {
          this.totalNotificaciones--
          let pos1 = this.notificationViews.map(function (e) { return e.read; }).indexOf(p._id);
          let pos2 = this.notification.map(function (e) { return e.read; }).indexOf(p._id);
          if (pos1 > -1) {
            this.notificationViews.splice(pos1, 1);
          }
          if (pos2 > -1) {
            this.notification.splice(pos2, 1);
          }
        })
      }

    }
  }


  getNotifications() {
    let noti = {
      user_id: this.user._id,
      seen: false,

    }

    this.notiService.getNotificationsNoSeen(noti).subscribe(res => {
      let asa = []
      asa = res as []
      if (asa.length > 0) {
        asa.forEach(x => {
          this.notification.push(x)
        });

        this.totalNotificaciones = this.notification.length
        if (this.totalNotificaciones > 7) {
          this.greater7=true
          for (let index = 0; index < this.notification.length; index++) {
            this.notificationViews.push(this.notification[index])

          }

        }
        else {
          this.greater7=false
          this.notificationViews = this.notification
        }
      }




    })
  }


}
