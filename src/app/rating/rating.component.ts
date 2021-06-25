import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl:'rating.component.html',
  styles: []
})
export class RatingComponent {
  private readonly MAX_NUMBER_OF_STARS = 5;

  @Input()
  rating = 0;
  offset1:string = null
  private get numberOfFullStars(): number {
    console.log(this.rating)
    this.offset1=(((this.rating*20)%10)/0.1)+'%'
    console.log(this.offset1)
    return Math.floor(this.rating);
  }

  private get numberOfEmptyStars(): number {
    return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
  }

  get fullStars(): any[] {
    return Array(this.numberOfFullStars);
  }

  get emptyStars(): any[] {
    return Array(this.numberOfEmptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }

}