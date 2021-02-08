import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from './services/authen.service';
import { Role } from './containers/default-layout/role';
import { user } from '../app/views/user/user';

@Injectable({
  providedIn: 'root'
})
export class VerifyAuthGuard implements CanActivate {
  role = ''
  constructor(
    private authenService: AuthenService,
    private router: Router
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authenService.loggedIn()) {

      this.authenService.returnUserRol().subscribe((ordenes: user[]) => {
        new Promise<any>((resolve, reject) => {
          ordenes.forEach((nt) => {
            this.role = nt.rol

            if (route.data.roles && route.data.roles.indexOf(this.role) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['/dashboard']);
              return false;
            }



          })

        })
      })

     // console.log(this.role)
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }    /*(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/


}
