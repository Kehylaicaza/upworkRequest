import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { empresa } from '../views/empresas/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  empresa: empresa[];
  //private URL = 'https://ofistoreserver2.herokuapp.com/empresas'; //heroku
  //  private URL = 'http://161.35.224.215:8080/empresas';
  private URL = 'http://localhost:3000/empresas'; //localhost
 // private URL = 'http://192.168.100.227:3000/empresas';
  constructor(public http: HttpClient, public router: Router) { }

  newEmpresa(empresa) {
    return this.http.post<any>(this.URL + '/newEmpresa', empresa);
  }

  getEmpresas() {
    return this.http.get(this.URL + '/getEmpresa');
  }
  /* 
    getGruposbyId(){
      return this.http.get(this.URL+'/getGroup/${lineagrafica._id}');
    } */
  getEmmpresasbyId(empresa) {
    return this.http.put(this.URL + `/getEmpresa/${empresa._id}`, empresa);
  }

  getOnlyEmpresa(_id: string) {
    //  console.log(_id)
    return this.http.get(this.URL + `/getOnlyEmpresa/${_id}`);
  }

  getMultipleID(empresa) {
    return this.http.post(this.URL + `/getMultipleID/`, empresa);
  }


  countAllEmpresas() {
    return this.http.get(this.URL + `/countAllEmpresas`);
  }

  updateEmpresas(empresa) {
    // console.log("aqui es "+this.URL + `/update/${empresa._id}`)
    return this.http.put(this.URL + `/update/${empresa._id}`, empresa);
  }

  deleteEmpresas(empresa) {
    return this.http.delete(this.URL + `/delete/${empresa._id}`, empresa);
  }


}
