import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthUserResponse } from './users.interface';
import { map, Observable } from 'rxjs';
import { CookieService } from '../../infra/services/cookie.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) {}

  auth(id?: string): Observable<void> {
    if (!id) {
      id = Math.random().toString(36).substring(2, 10);
    }

    return this.http
      .get<AuthUserResponse>(
        `${environment.apiUrl}/auth/generate-token/${id}`,
        {
          headers: {
            Authorization: `${environment.projectToken}`,
          },
        },
      )
      .pipe(
        map((response: AuthUserResponse) => {
          this.cookieService.setCookie('token', response.token, 1);
          this.cookieService.setCookie('userId', id, 1);
        }),
      );
  }

  getId(): string {
    return this.cookieService.getCookie('userId');
  }

  getToken(): string {
    return this.cookieService.getCookie('token');
  }

  logout(): void {
    this.cookieService.deleteCookie('token');
    this.cookieService.deleteCookie('userId');
    this.router.navigate(['/']);
  }
}
