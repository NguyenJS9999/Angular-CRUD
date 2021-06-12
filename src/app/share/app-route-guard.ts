import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppRouteGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let token = localStorage.getItem('token');
        console.log(token)
        if (token){
            return true;
        } else{
            this.router.navigate(['login']);
        }
    }
}
