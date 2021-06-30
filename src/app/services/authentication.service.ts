import { Injectable } from '@angular/core';  
@Injectable({  
  providedIn: 'root'  
})  
export class AuthenticationService {  
  logout() {  
    localStorage.removeItem('accessToken'); 
    this.loggedIn=false 
  }  
  public  loggedIn:  boolean  = false  
} 