import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  searchQueryy: string = null

  @Output() newItemEvent = new EventEmitter<string>();

  
  constructor( private route:Router ) {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  ngOnInit(): void {
    const searchBox = document.getElementById('searchQueryy');
    const keyup$ = fromEvent(searchBox, 'keyup');
    keyup$.pipe(debounceTime(800)).subscribe((x) => {
      if (this.searchQueryy == '' ||  this.searchQueryy == ' ') {
        console.log(this.searchQueryy);
        this.addNewItem(this.searchQueryy)
        this.route.navigate(['search'])
        return;
      }
      this.route.navigate(['search',this.searchQueryy])
      console.log(this.searchQueryy);
      this.addNewItem(this.searchQueryy)
    });
  }
 

}