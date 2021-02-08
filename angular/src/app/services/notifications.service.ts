import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {


  //private URL = 'https://ofistoreserver2.herokuapp.com/notifications';
  //private URL = 'http://localhost:3000/notifications';
  private URL = 'http://192.168.100.227:3000/notifications';
  constructor(public http: HttpClient, public router: Router) {

  }


  newNotifications(notification) {
    return this.http.post<any>(this.URL + '/newNotifications', notification);
  }

  getNotificationsNoSeen(notification) {
    // console.log("soy clasex1"+clase)
    return this.http.post<any>(this.URL + '/getNotificationsNoSeen/', notification);
  }

  update(noti) {
    return this.http.put(this.URL + `/update/${noti._id}`, noti);
  }


  getAllNotificationsByUser(user_id) {
    // console.log("soy clasex1"+clase)
    return this.http.get(this.URL + `/getAllNotificationsByUser/${user_id}`);

  }



}
