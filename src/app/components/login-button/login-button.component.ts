import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
   private accessToken: string = null;
    id: string;
    myvar=''

  constructor(private _auth: AuthenticationService, private _router: Router) { 
      
    
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
