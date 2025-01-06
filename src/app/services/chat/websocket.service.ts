import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as io from 'socket.io-client';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket: io.Socket;

  constructor(private usersService: UsersService) {
    this.socket = io.connect(`${environment.apiUrl}/chat`, {
      transports: ['websocket'],
      autoConnect: true,
      withCredentials: true,
      auth: {
        token: `Bearer ${this.usersService.getToken()}`,
      },
    });
  }

  disconnect() {
    this.socket.disconnect();
  }
}
