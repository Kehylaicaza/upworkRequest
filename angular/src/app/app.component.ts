import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AuthenService } from "../app/services/authen.service";
import Swal from 'sweetalert2';
import { filter } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { eventsHandler } from 'devextreme/events';
import { BnNgIdleService } from 'bn-ng-idle';
import {io} from 'socket.io-client/build/index';

export let browserRefresh = false;

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  bandera: boolean = false
  subscription: Subscription;
  router2: Router
  private socket: any;

  constructor(private router: Router, private authenService: AuthenService,private bnIdle: BnNgIdleService) {
    /*this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.bandera = !router.navigated;
        console.log("refreshx2" + this.bandera)
      }
    });*/

    this.bnIdle.startWatching(900).subscribe((res) => {
      if(res) {
          console.log("session expired");
          authenService.logout()
      }
    })
  }

  @HostListener('window:unload', ['$event'])
  async unloadHandler(event) {
    this.subscription = this.router2.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.bandera = !this.router2.navigated;
        //if (!this.bandera) {
          if ("maily" in localStorage || "empresaLegueada" in localStorage || "empresaLegueada" in localStorage) {
            localStorage.removeItem("token");
            //return false
          } else {
            return true;
          }
        //} else {
         // console.log("vamos :c")
        //}
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  
}
