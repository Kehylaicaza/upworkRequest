import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MailShareService {
  //private URL = 'https://ofistoreserver2.herokuapp.com/email';
  //private URL = 'http://localhost:3000/email'; //localhost
  private URL = 'http://192.168.100.227:3000/email';
  constructor(private http: HttpClient, public router: Router) { }

  sendMail(body) {

    return this.http.post<any>(this.URL + '/sendmail', body);


  }
}
