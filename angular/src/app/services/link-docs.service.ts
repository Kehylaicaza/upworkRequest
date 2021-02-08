import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LinkDocsService {
  //private URL = 'https://ofistoreserver2.herokuapp.com/linkDocs';
  //private URL = 'http://localhost:3000/linkDocs';
  private URL = 'http://192.168.100.227:3000/linkDocs';
  constructor(public http: HttpClient, public router: Router) { }



  newLinkingDocs(link) {
    return this.http.post<any>(this.URL + '/newLinkingDocs', link);
  }


  updateLinkingDocs(link) {
    return this.http.put(this.URL + `/updateLinkingDocs/${link._id}`, link);
  }

  deleteLinkingDocs(list) {
    return this.http.delete(this.URL + `/deleteLinkingDocs/${list._id}`, list);
  }

  deleteLinkingDocsMany(clase_id) {
    return this.http.delete(this.URL + `/deleteLinkingDocsMany/${clase_id}`);
  }


  getLinkEmpresa(link) {
    return this.http.get(this.URL + `/getLinkEmpresa/${link}`);
  }

  getLinkingOrigin(origin_id) {
    return this.http.get(this.URL + `/getLinkingOrigin/${origin_id}`);
  }


  getLinkId(link) {
    return this.http.get(this.URL + `/getLinkId/${link}`);
  }

  getLinkName(name) {
    return this.http.post<any>(this.URL + '/getLinkName/', name);
  }


}
