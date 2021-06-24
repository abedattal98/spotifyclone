import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit  {
  currentrate:number = 0
  @Input() offset1:string=null
  @Input() offset2:string=null

  constructor() { }

  ngOnInit(): void {
  }
}
