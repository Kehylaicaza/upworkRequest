import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  //private URL = 'https://ofistoreserver2.herokuapp.com/subscriptions';
  //private URL = 'http://localhost:3000/subscriptions';
  private URL = 'http://192.168.100.227:3000/subscriptions';
  constructor(public http: HttpClient, public router: Router) { }



  newSubscriptions(subscriptions) {
    return this.http.post<any>(this.URL + '/newSubscriptions', subscriptions);
  }


  getSubscriptions() {
    return this.http.get(this.URL + '/getSubscriptions');
  }


  getSubscriptionsbyId(subscriptions_id) {
    return this.http.get(this.URL + `/getSubscriptionsbyId/${subscriptions_id}`);

  }

  getSubscriptionsbyIDUser(subscriptions_id) {
    return this.http.get(this.URL + `/getSubscriptionsbyIDUser/${subscriptions_id}`);

  }

  getSubscriptionsByClass(doc_id) {

    return this.http.get(this.URL + `/getSubscriptionsByClass/${doc_id}`);
  }

  updateSubscriptions(subscriptions) {

    return this.http.put(this.URL + `/updateSubscriptions/${subscriptions._id}`, subscriptions);
  }


  deleteSubscriptions(subscriptions) {
    return this.http.delete(this.URL + `/delete/${subscriptions._id}`, subscriptions);
  }

  deleteSubscriptionsByClass(subscriptions) {
    return this.http.delete(this.URL + `/deleteSubscriptionsByClass/${subscriptions._id}`, subscriptions);
  }

}
