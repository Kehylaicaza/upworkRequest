import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { user } from '../views/user/user';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarios: user[];
  role = ''

  // private URL = 'https://ofistoreserver2.herokuapp.com/api';
     private URL = 'http://localhost:3000/api';
    
 
  constructor(private http: HttpClient, private router: Router, private authenService: AuthenService,) { }

  newUser(user) {
    //console.log("el usuario "+JSON.stringify(user))
    return this.http.post<any>(this.URL + '/newUser', user);
  }

  getUsers() {
    return this.http.get(this.URL + '/getUsers');
  }

  getUsersbyEmpresa(empresa: string) {
    return this.http.get(this.URL + `/getUsers2/${empresa}`);
  }

  getUserRepeat(usuario) {
    return this.http.post<any>(this.URL + `/getUserRepeat/`, usuario);
  }



  updateUsuario(usuario) {

    return this.http.put(this.URL + `/update/${usuario._id}`, usuario);
  }

  updateUsuarioAdmin(usuario) {
    // console.log("aqui es "+this.URL + `/update/${usuario._id}`)
    return this.http.put(this.URL + `/update/${usuario._id}`, usuario);
  }

  deleteUsuario(usuario) {
    return this.http.delete(this.URL + `/delete/${usuario._id}`, usuario);
  }

  updateUser(user) {

    return this.http.put(this.URL + `/updateUser/${user._id}`, user);
  }


  nameRepeatSuperAdmin(user) {

    return this.http.post<any>(this.URL + '/nameRepeatSuperAdmin/', user);
  }

  nameRepeatAdmin(user) {

    return this.http.post<any>(this.URL + '/nameRepeatAdmin/', user);
  }

  mailRepeatSuperAdmin(user) {

    return this.http.post<any>(this.URL + '/mailRepeatSuperAdmin/', user);
  }

  mailRepeatAdmin(user) {

    return this.http.post<any>(this.URL + '/mailRepeatAdmin/', user);
  }

  mailRepeatSuperAdminEdit(user) {

    return this.http.post<any>(this.URL + '/mailRepeatSuperAdminEdit/', user);
  }


  mailRepeatAdminEdit(user) {

    return this.http.post<any>(this.URL + '/mailRepeatAdminEdit/', user);
  }




}
