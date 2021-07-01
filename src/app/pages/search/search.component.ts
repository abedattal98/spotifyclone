import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  q :string = null
  addItem(newItem: string) {
  this.q=newItem
  console.log("emitted"+this.q)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
