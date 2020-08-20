import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { NewAuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewAuthGuard implements CanLoad {
  constructor(public newauthService: NewAuthService,
    public router: Router) {

  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.newauthService.isLoggedIn !== true) {
      this.router.navigate(['login'])
    }
    return true;
  }
}
