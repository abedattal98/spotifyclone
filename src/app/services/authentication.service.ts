import { Injectable } from '@angular/core';  
@Injectable({  
  providedIn: 'root'  
})  
export class AuthenticationService {  
  logout() {  
    localStorage.removeItem('accessToken'); 
  }  

  get running(): boolean {
    if( localStorage.getItem('accessToken'))
    return true
  }
}