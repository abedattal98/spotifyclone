import { Component, Input, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  @Input() images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  imgnull = 'https://media.wired.com/photos/5927001eaf95806129f51539/master/w_2560%2Cc_limit/spotify-logo-zoom-s.jpg'
  constructor(private _artistService: ArtistService, private routess: ActivatedRoute, private route:Router ) {}

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
  }
}
