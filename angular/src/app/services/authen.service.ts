import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SocialUser } from "angularx-social-login";
import { user } from '../views/user/user';
import { empresa } from '../views/empresas/empresas';
import { EmpresasService } from './empresas.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  userEmail = '';
  userLogin;
  usuario: user;
  usuarios: user[] = []
  usuarios2: user[] = []
  estalogeado: boolean = true;


  // private URL = 'http://161.35.224.215:3000/api';

  //private URL = 'http://localhost:8080/api';
  private URL = 'http://localhost:3000/api';
  //private URL = 'http://192.168.100.227:3000/api';
 // private URL = 'https://ofistoreserver2.herokuapp.com/api'; //heroku
  constructor(private http: HttpClient, private router: Router, public empresasService: EmpresasService,) { }

  signup(user) {

    return this.http.post<any>(this.URL + '/register', user);
  }

  signIn(user) {
    this.userEmail = user.email;
    // console.log(user.email + "aqui");

    return this.http.post<any>(this.URL + '/signIn', user);
  }

  loggedIn() {//comprobar si el usuario esta logeado

    return !!localStorage.getItem('token');
  }

  getUserRepeat(usuario) {
    return this.http.post<any>(this.URL + '/getUserRepeat', usuario);
  }

  getPassword(usuario) {
    return this.http.post<any>(this.URL + '/getPassword', usuario);
  }


  updatePassword(usuario) {
    // console.log("aqui es "+this.URL + `/update/${usuario._id}`)
    return this.http.put(this.URL + `/updatePassword/${usuario._id}`, usuario);
  }


  returnUserRol() {
    const pr = localStorage.getItem('maily')
    // console.log(this.URL+`/getUsers1/${pr}`)
    return this.http.get(this.URL + `/getUsers1/${pr}`);

  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    let empresaL = localStorage.getItem("empresaLegueada");
    this.empresasService.getOnlyEmpresa(empresaL).subscribe(res => {
      let empresa: empresa = res as empresa
      empresa.usuarios_activos = empresa.usuarios_activos - 1
      this.empresasService.updateEmpresas(empresa).subscribe(res => {

        localStorage.removeItem('token');
        localStorage.removeItem('browserToken');
        this.router.navigate(['/login']);
      })
    })


  }

  /*logoutAsync(): Observable<any> {
    let empresaL = localStorage.getItem("empresaLegueada");
    this.empresasService.getOnlyEmpresa(empresaL).subscribe(res => {
      let empresa: empresa = res as empresa
      empresa.usuarios_activos = empresa.usuarios_activos - 1
      this.empresasService.updateEmpresas(empresa).subscribe(res => {

        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      })
    })

    return
  }*/

  async triggerSyncLogout() {
    let empresaL = localStorage.getItem("empresaLegueada");
    this.empresasService.getOnlyEmpresa(empresaL).subscribe(res => {
      let empresa: empresa = res as empresa
      empresa.usuarios_activos = empresa.usuarios_activos - 1
      this.empresasService.updateEmpresas(empresa).subscribe(res => {

        localStorage.removeItem('token');
        localStorage.removeItem('browserToken');
        this.router.navigate(['/login']);
      })
    })

    return
  }




  logoutTimer() {
    localStorage.removeItem('token');
    localStorage.removeItem('browserToken');

    this.router.navigate(['/login']);

  }

  getUsers() {
    return this.http.get(this.URL + '/getUsers');
  }

  getUsers2() {
    return this.http.get(this.URL + '/getUsers2');
  }
  getUsersbyEmpresa(empresa: string) {
    return this.http.get(this.URL + `/getUsers2/${empresa}`);
  }

  countAllUsersEmpresa(empresa: string) {
    return this.http.get(this.URL + `/countAllUsersEmpresa/${empresa}`);
  }


  countAllUsers() {
    return this.http.get(this.URL + `/countAllUsers`);
  }

  getUserLogueado(correo: string) {
    //  console.log(this.URL+`/getUsers1/${correo}`)
    return this.http.get(this.URL + `/getUsers1/${correo}`);
  }

  getUserAccess(_id: string) {
    //  console.log(this.URL+`/getUsers1/${correo}`)
    return this.http.get(this.URL + `/getUserAccess/${_id}`);
  }

  getUsersbyEmpresa2() {
    return this.http.get(this.URL + `/getUsers2/`);
  }

  Savesresponse(responce) {

    return this.http.post<any>(this.URL + '/signInGoogle', responce);
    //return this.http.post(this.URL,responce);
  }



}
