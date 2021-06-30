import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service'; 

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router, private authenticationService: AuthenticationService) {  }
  isLoggedIn=false
  logout() {  
    this.authenticationService.logout();  
    this.route.navigate(['']);  
  }  

  ngOnInit(): void {
  }

}
