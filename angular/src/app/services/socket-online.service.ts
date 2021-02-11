import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketOnlineService {

  constructor(private socket: Socket) { }

  emitLogin(id: string) {
    this.socket.emit('login', {
      userId: id
    });
  }

  editDocument(document: string) {
    this.socket.emit('editDoc', document);
  }

}