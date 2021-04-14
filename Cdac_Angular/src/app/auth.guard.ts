import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{
 
  constructor(private ser:UserServiceService,private router:Router){}
  canActivate():boolean
  {
    if(this.ser.UserLoggedIn() || this.ser.VendorLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/Home']);
      return false;
    }
  }
  
}
