import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

export class SocketOnlineService {
  
  constructor(private socket: Socket) { }

  
  public randomString(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  emitLogin(id: string) {
    let browserToken = localStorage.getItem('browserToken')
    if (!browserToken) {
      browserToken = this.randomString(10)
      localStorage.setItem('browserToken', browserToken)
    }
    this.socket.emit('login', {
      userId: id,
      browserToken
    });
  }

  editDocument(document: string) {
    this.socket.emit('editDoc', document);
  }

}