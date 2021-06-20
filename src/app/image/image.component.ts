import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  searchQuery: string = '';

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }
  constructor(private _imageService: ImageService) {
    // this.searchImages('newYork');
  }
  searchImages(query: string) {
    this.searching = true;
    return this._imageService.getImage(query).subscribe((data: any[]) => {
      console.log(data);
      this.handleSuccess(data);
      this.searching = false;
    });
  }
  // onChangeEvent(event: any){
  //   console.log(event.target.value);
  //   this.searchImages(event.target.value)
  // }
  // onKeypressEvent(event: any){
  //   console.log(event.target.value);
  //   this.searchImages(event.target.value)
  // }

  ngOnInit(): void {
    console.log(this.searchQuery);
    const searchBox = document.getElementById('searchQuery');
    const keyup$ = fromEvent(searchBox, 'keyup');
    keyup$.pipe(debounceTime(800)).subscribe((x) => {
      console.log(this.searchQuery);
      this.searchImages(this.searchQuery);
    });
  }
}
