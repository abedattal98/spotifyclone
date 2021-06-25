import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
}
