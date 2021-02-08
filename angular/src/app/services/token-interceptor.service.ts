import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import {AuthenService} from './authen.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthenService) { }

  
  intercept(req, next) {
    //console.log(this.authService.getToken());
    const tokenizeReq= req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}