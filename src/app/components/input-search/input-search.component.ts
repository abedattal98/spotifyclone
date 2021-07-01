import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  searchQueryy: string = null;
  @Output() SearchEvent = new EventEmitter<string>();
  constructor( private route:Router, private routess:ActivatedRoute ) {}

  CallFathertoSearch(value: string) {    
    this.SearchEvent.emit(value);
  }
  ngOnInit(): void {
    const searchBox = document.getElementById('searchQueryy');
    const keyup$ = fromEvent(searchBox, 'keyup');
    keyup$.pipe(debounceTime(800)).subscribe(() => { 
      if (this.searchQueryy == '' ||  this.searchQueryy == ' ') {
        this.route.navigate(['search'])
        return;
      }     
      this.route.navigate(['search',this.searchQueryy])
      this.CallFathertoSearch(this.searchQueryy)
    });
    if( this.routess.snapshot.paramMap.get('id')){
      this.searchQueryy=this.routess.snapshot.paramMap.get('id')
      this.CallFathertoSearch(this.searchQueryy)
  }
}
 

}