import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
   accessToken='BQBnd6eyZJsZVcwj7QA1jEek6s7Mb-d_2vLJ5mmpJL856q8NsEcmm5O17yLVdFViz1vhkNIqG1JAILVAm8zcf3BmkRwfd1m7iX89zIyQygr81hpwe4r0407SeemUlNxWgl_8SzOYjcshm7IEuGwax2xOooV503rZBl93T_ZZErvNrficNJBFjw';

  constructor(private _auth: AuthenticationService, private _router: Router) { 
      
    if (this._auth.loggedIn) {  
      this._router.navigate(['search']);  
    }  
  }  
  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
  login() {  
    localStorage.setItem('currentUser', "loggedin");  
    localStorage.setItem('accessToken', this.accessToken);  

    this._router.navigate(['search']);  

  } 
}
