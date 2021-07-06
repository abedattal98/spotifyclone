import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
   private accessToken: string = null;
    id: string;
    myvar=''
  constructor( private _router: Router) { 
  }  
  
  ngOnInit(): void {
    this.myvar = this._router.url 
    this.accessToken=this.myvar.substring(8)
    if (this.accessToken!=null) {  
      this.login()
        this._router.navigate(['search']);    
        }  
  }
  goToLink(url: string){
    
    window.open(url, "_blank");
  }

  login() {  

    
    localStorage.setItem('accessToken', this.accessToken);  

    this._router.navigate(['search']);  

  } 
  
}
