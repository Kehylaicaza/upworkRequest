import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  //private URL = 'http://localhost:3000/list';
  private URL = 'http://192.168.100.227:3000/list';
  //private URL = 'https://ofistoreserver2.herokuapp.com/list';

  constructor(public http: HttpClient, public router: Router) { }

  newList(list) {
    return this.http.post<any>(this.URL + '/newList', list);
  }

  getListByEmpresa(list) {
    return this.http.get(this.URL + `/getListByEmpresa/${list}`);
  }

  getListOne(list) {
    return this.http.get(this.URL + `/getListOne/${list}`);
  }


  getListExistlist(lista) {
    return this.http.post<any>(this.URL + '/getListExistlist/', lista);
  }

  getListEmpresa(lista) {
    return this.http.post<any>(this.URL + '/getListEmpresa/', lista);
  }

  getListExistlistName2(lista) {
    return this.http.post<any>(this.URL + '/getListExistlistName2/', lista);
  }

  getListUsado(list) {
    return this.http.get(this.URL + `/getListUsado/${list}`);
  }


  updateList(list) {
    return this.http.put(this.URL + `/updateList/${list._id}`, list);
  }

  updateListUsado(list) {
    return this.http.put(this.URL + `/updateListUsado/${list._id}`, list);
  }

  deleteList(list) {
    return this.http.delete(this.URL + `/deleteList/${list._id}`, list);
  }

}
