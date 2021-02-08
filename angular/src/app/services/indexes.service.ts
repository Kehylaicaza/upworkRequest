import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { indexe } from '../views/indexes/indexes';
@Injectable({
  providedIn: 'root'
})
export class IndexesService {
  //private URL = 'https://ofistoreserver2.herokuapp.com/indexes';
  //private URL = 'http://localhost:3000/indexes';
  private URL = 'http://192.168.100.227:3000/indexes';
  constructor(public http: HttpClient, public router: Router) { }

  newIndex(indexe) {
    return this.http.post<any>(this.URL + '/newIndex', indexe);
  }

  getIndexes() {
    return this.http.get(this.URL + '/getIndexes');
  }

  getIndexbyId(indexe) {
    return this.http.put(this.URL + `/getEmpresa/${indexe._id}`, indexe);
  }


  getIndexeOnlybyName(indexe) {
    return this.http.post<any>(this.URL + `/getIndexeOnlybyName`, indexe);
  }


  updateIndexe(indexe) {
    return this.http.put(this.URL + `/update/${indexe._id}`, indexe);
  }

  getIndexeOnlyOne(_id) {
    return this.http.get(this.URL + `/getIndexeOnlyOne/${_id}`);
  }

  getIndexebyList(_id) {
    return this.http.get(this.URL + `/getIndexebyList/${_id}`);

  }


  getIndexeOnlybyId(_id) {
    return this.http.get(this.URL + `/getIndexeOnlybyId/${_id}`);
  }


  getIndexesByEmpresa(empresa) {
    return this.http.get(this.URL + `/getIndexesByEmpresa/${empresa}`);
  }

  deleteIndexe(indexe) {
    return this.http.delete(this.URL + `/delete/${indexe._id}`, indexe);
  }


}
