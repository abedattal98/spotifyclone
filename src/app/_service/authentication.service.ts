import { Injectable } from '@angular/core';  
@Injectable({  
  providedIn: 'root'  
})  
export class AuthenticationService {  
  login(accessID: string, accessToken: string) {  
    // response.type === 'success' && response.url
    if (accessID  && accessToken) {  
      localStorage.setItem('accessToken', accessToken);  
      return true;  
    }  
  }  
  logout() {  
    localStorage.removeItem('accessToken');  
  }  
  public get loggedIn(): boolean {  
    // return (localStorage.getItem('currentUser') !== null);  
    return (localStorage.getItem('accessToken') !== null);  

  }  
} 