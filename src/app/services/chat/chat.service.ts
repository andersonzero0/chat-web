import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ChatList, CreateMessage, Message } from './chat.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService,
  ) {}

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.usersService.getToken()}`,
    });
  }

  sendMessage(
    data: CreateMessage,
    file: File | null = null,
  ): Observable<Message> {
    if (data.message.type === 'text' && !data.message.content) {
      throwError(() => new Error('Content is required'));
    }

    if (data.message.type === 'photo' && !file) {
      throwError(() => new Error('File is required'));
    }

    const formData = new FormData();

    formData.append('receiver_id', data.receiver_id);
    formData.append('message', JSON.stringify(data.message));

    if (data.ref_message) {
      formData.append('ref_message', JSON.stringify(data.ref_message));
    }

    if (file) {
      formData.append('file', file);
    }

    return this.httpClient.post<Message>(
      `${environment.apiUrl}/messages`,
      formData,
      {
        headers: this.getHeaders(),
      },
    );
  }

  getChatList(): Observable<ChatList> {
    return this.httpClient.get<ChatList>(
      `${environment.apiUrl}/messages/chat-list`,
      {
        headers: this.getHeaders(),
      },
    );
  }

  getPrivateMessages(
    target_user_id: string,
    reading_mode: boolean = false,
  ): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${environment.apiUrl}/messages`, {
      params: {
        target_user_id,
        reading_mode,
      },
      headers: this.getHeaders(),
    });
  }
}
