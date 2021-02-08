import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  //private URL = 'http://localhost:3000/files'; //localhost
  //private URL = 'https://ofistoreserver2.herokuapp.com/upload';
  private URL = 'http://192.168.100.227:3000/files';
  constructor(private http: HttpClient) { }

  uploadFile(formData) {
    //console.log("yes "+JSON.stringify(formData))
    return this.http.post<any>(this.URL + '/uploadFile', formData);
  }


  newDocumento(documento) {
    //console.log("el documento tiene "+JSON.stringify(documento))
    return this.http.post<any>(this.URL + '/newDocument', documento);
  }

  getDocumentos() {
    return this.http.get(this.URL + '/getDocumentos');
  }

  getDocumetosbyEmpresa(empresa: string) {
    return this.http.get(this.URL + `/getDocumetosbyEmpresa/${empresa}`);
  }

  /* getDocumetosbyClase(clase:string){ 
     return this.http.get(this.URL+`/getDocumentos3/${clase}`);
   }*/

  getDocumetosbyClase(clase) {
    // console.log("soy clasex1"+clase)
    return this.http.post<any>(this.URL + '/DocumentosByClass/', clase);
  }

  getDocumetosbyIndexalue(clase) {
    // console.log("soy clasex1"+clase)
    return this.http.post<any>(this.URL + '/getDocumetosbyIndexalue/', clase);
  }


  getDocumetosbyValueRepeat(clase) {
    // console.log("soy clasex1"+clase)
    return this.http.post<any>(this.URL + '/getDocumetosbyValueRepeat/', clase);
  }

  getDocumetosLocked(clase) {
    // console.log("soy clasex1"+clase)
    return this.http.post<any>(this.URL + '/getDocumetosLocked/', clase);
  }

  getDocumetosDeleted(clase) {
    // console.log("soy clasex1"+clase)
    return this.http.post<any>(this.URL + '/getDocumetosDeleted/', clase);
  }


  countAllDocumentsLocked(clase_id) {
    return this.http.get(this.URL + `/countAllDocumentsLocked/${clase_id}`);
  }

  countAllDocumentsDeleted(clase_id) {
    return this.http.get(this.URL + `/countAllDocumentsDeleted/${clase_id}`);
  }

  countAllDocumentsNoDeleted(clase_id) {
    return this.http.get(this.URL + `/countAllDocumentsNoDeleted/${clase_id}`);
  }


  countAllDocumentsNoLocked(clase_id) {
    return this.http.get(this.URL + `/countAllDocumentsNoLocked/${clase_id}`);
  }


  getDocumetosbyNameRepeat(clase) {
    // console.log("soy clasex1"+clase)
    return this.http.post<any>(this.URL + '/getDocumetosbyNameRepeat/', clase);
  }



  getLinkingDoki(doc) {
    // console.log("soy clasex1"+clase)
    return this.http.post<any>(this.URL + '/getLinkingDoki/', doc);
  }





  getDocumetosbyID(_id: string) {

    return this.http.get(this.URL + `/DocumentosByID/${_id}`);

  }


  getDocumetosbyIndexe(_id: string) {

    return this.http.get(this.URL + `/getDocumetosbyIndexe/${_id}`);

  }

  getDocumetosbyIdUser(_id: string) {
    return this.http.get(this.URL + `/getDocumetosbyIdUser/${_id}`);
  }


  getDocumentsByIndexeListUsed(_id: string) {
    return this.http.get(this.URL + `/getDocumentsByIndexeListUsed/${_id}`);
  }



  loadPDF(_id: string) {
    return this.http.get(this.URL + '/loadPDF');

  }


  updateFile(documento) {

    return this.http.put(this.URL + `/updateFile/${documento._id}`, documento);
  }


  updateDocumento(documento) {
    console.log("aqui es " + this.URL + `/update/${documento._id}`)
    return this.http.put(this.URL + `/update/${documento._id}`, documento);
  }

  deleteDocumento(documento) {
    return this.http.delete(this.URL + `/delete/${documento._id}`, documento);
  }

  deleteDocumentoAll(documento) {
    return this.http.delete(this.URL + `/deleteAll/${documento.clase_id}`, documento);
  }


  updateDocumemto(documento) {

    return this.http.put(this.URL + `/updateDocumento/${documento._id}`, documento);
  }

  changeStateDoc(doc) {
    return this.http.put(this.URL + `/changeStateDoc/${doc._id}`, doc);
  }

  changeStateDocActive(_id: string) {
    return this.http.put(this.URL + `/changeStateDocActive/${_id}`, _id);
  }



  countAllDocuments() {
    return this.http.get(this.URL + `/countAllDocuments`);
  }

  countAllDocumentsEmpresa(empresa) {
    return this.http.get(this.URL + `/countAllDocumentsEmpresa/${empresa}`);
  }

  countAllDocumentsbyClass(_id) {
    return this.http.get(this.URL + `/countAllDocumentsbyClass/${_id}`);
  }


  countAllDocumentsEmpresaNotDeleted(empresa) {
    return this.http.get(this.URL + `/countAllDocumentsEmpresaNotDeleted/${empresa}`);
  }



  download(documentId: string): Observable<any> {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      }),

      // Ignore this part or  if you want full response you have 
      // to explicitly give as 'boby'as http client by default give res.json()
      observe: 'response' as 'body',

      // have to explicitly give as 'blob' or 'json'
      responseType: 'blob' as 'blob'
    };

    return this.http.get(`${documentId}`, options)
      .pipe(map((res) => res))


  }
  // handle error
  private handleError(error: any) {
    return Observable.throw(error);
  }


  downloadforZip(url: string) {
    //return this.http.get(url, {responseType: 'arraybuffer'});
    //return this.http.get(url, {responseType: 'blob'});
    return this.http.get(url, { responseType: 'arraybuffer' }).pipe(map(res => res))
  }


  downloadFile(url: string) {
    //return this.http.get(url, {responseType: 'arraybuffer'});
    //return this.http.get(url, {responseType: 'blob'});
    return this.http.get(url, { responseType: 'arraybuffer' }).pipe(map(res => res))
  }


}