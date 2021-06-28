import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiCaller : HttpClient)
  {

  }
  ngOnInit(): void {
  
  }

  // Login()
  // {
  //   //setInterval(()=>{},5000) : Pulling Mechanism
  //   const headers = { 'content-type': 'application/json'}
  //   const body=JSON.stringify(this.userInfo);
  //   this.apiCaller
  //       .post("http://localhost:3000/login", body,{'headers':headers})
  //        .subscribe((resp)=>{
  //          alert(resp);
  //       }) // Pushing Mechanism // RxJS
  // }
}

