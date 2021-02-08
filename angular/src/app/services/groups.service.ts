import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  
  constructor(public http: HttpClient, public router: Router) { }

  

}
