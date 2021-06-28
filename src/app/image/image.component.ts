import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../_service/artist.service';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';
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
  imgnull = 'https://media.wired.com/photos/5927001eaf95806129f51539/master/w_2560%2Cc_limit/spotify-logo-zoom-s.jpg'
  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.artists.items;
    console.log(this.images);
  }
  constructor(private _artistService: ArtistService, private route:Router, private authenticationService: AuthenticationService) {}
  logout() {  
    this.authenticationService.logout();  
    this.route.navigate(['']);  
  }  
  searchImages(query: string) {
    this.searching = true;
    return this._artistService.getImage(query).subscribe((data: any[]) => {
      this.handleSuccess(data);
      if (data) {
        this.searching = false;
      }
    });
  }
  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.GoToAlbum(value)
    
  }
  GoToAlbum(x:string){

    this.route.navigate(['artist',x])
  }
  
  ngOnInit(): void {
    console.log(this.searchQuery);
    const searchBox = document.getElementById('searchQuery');
    const keyup$ = fromEvent(searchBox, 'keyup');
    keyup$.pipe(debounceTime(800)).subscribe((x) => {
      if (this.searchQuery == '' || this.searchQuery == ' ') {
        this.images = null;
        this.searching = false;
        return;
      }
      this.searchImages(this.searchQuery);
    });
  }
}
