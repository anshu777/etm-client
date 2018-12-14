import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(//private authService: AuthService,
    private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.oauthService.hasValidIdToken()) {
    //   return true;
    // }
    // if (this.authService.isLoggednIn()) {
    //   return true;
    // }

    // if (localStorage.getItem('userToken') != null) {
    //   const roles = next.data['roles'] as Array<string>;
    //   if (roles) {
    //     const match = this.authService.roleMatch(roles);
    //     if (match) {
    //       return true;
    //     } else {
    //       this.router.navigate(['/forbidden']);
    //       return false;
    //     }
    //   } else {
    //     return true;
    //   }
    // }
    // this.router.navigate(['/login']);
     return false;
  }
}
