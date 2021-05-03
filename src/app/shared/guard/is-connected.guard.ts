import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isConnected = this.userService.isConnectedStatus();

    if (!isConnected){
      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }
  
}
