import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const cookieService = new CookieService();

  if (state.url === '/welcome') {
    if (cookieService.getCookie('token')) {
      router.navigate(['/chat']);
      return false;
    }
  }

  if (state.url !== '/welcome') {
    if (!cookieService.getCookie('token')) {
      router.navigate(['/welcome']);
      return false;
    }
  }

  return true;
};
