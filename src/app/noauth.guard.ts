import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements CanActivate {
  constructor(private router:Router){}
  
  canActivate(){
    let user = localStorage.getItem('currentUser')
    if(user){
      this.router.navigate(['/dashboard'])
    } else {
      return true;
    }
    
  }
  
}
