import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthUserResponse } from './users.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  auth(id?: string): Observable<AuthUserResponse> {
    if (!id) {
      id = Math.random().toString(36).substring(2, 10);
    }
    
    return this.http.get<AuthUserResponse>(`${environment.apiUrl}/auth/${id}`, {
      headers: {
        'Authorization': `${environment.projectToken}`
      },
    });
  }
}
