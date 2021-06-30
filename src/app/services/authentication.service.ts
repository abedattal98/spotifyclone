import { Injectable } from '@angular/core';  
@Injectable({  
  providedIn: 'root'  
})  
export class AuthenticationService {  
  logout() {  
    localStorage.removeItem('accessToken');  
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('accessToken') !== null);  

  }  
} 