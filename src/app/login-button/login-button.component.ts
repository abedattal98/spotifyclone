import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
   private accessToken: string;
  id: any;

  constructor(private _auth: AuthenticationService, private _router: Router , private activatedRoute: ActivatedRoute) { 
      
    if (this._auth.loggedIn) {  
      this._router.navigate(['search']);  
    }  
  }  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = this.activatedRoute.snapshot.paramMap.get('')
      console.log(this.id)
    });
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
