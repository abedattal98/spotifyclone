import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';
import { OAuthService } from '../_service/OAuthService.service';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  AuthUrl:string;
   accessToken='BQBnd6eyZJsZVcwj7QA1jEek6s7Mb-d_2vLJ5mmpJL856q8NsEcmm5O17yLVdFViz1vhkNIqG1JAILVAm8zcf3BmkRwfd1m7iX89zIyQygr81hpwe4r0407SeemUlNxWgl_8SzOYjcshm7IEuGwax2xOooV503rZBl93T_ZZErvNrficNJBFjw';

  constructor(private _auth: AuthenticationService, private serv:OAuthService ,private _router: Router) { 
      
    if (this._auth.loggedIn) {  
      this._router.navigate(['search']);  
    }  
  }  
  ngOnInit(): void {
    this.serv.GetAuthPage().subscribe(data=>this.AuthUrl=data["authUrl"],err=>{console.log(err)});
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
  login() {  
    this._router.navigate(['test'],{queryParams:{url:this.AuthUrl}});

    localStorage.setItem('currentUser', "loggedin");  
    localStorage.setItem('accessToken', this.accessToken);  

    this._router.navigate(['search']);  

  } 
}
