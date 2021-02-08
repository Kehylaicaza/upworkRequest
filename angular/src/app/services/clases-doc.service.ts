import { Injectable } from '@angular/core';
import { documento } from '../views/dashboard/dashboard';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClasesDocService {



  constructor(public http: HttpClient, public router: Router) { }
}