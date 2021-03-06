import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { AlbumService } from '../../services/album.service'; 
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id = ''
  images: any[];
  constructor(private route: ActivatedRoute, private _albumService: AlbumService, private routee:Router) { }
  searchImages(query: string) {
    return this._albumService.getImage(query).subscribe((data: any) => {
      this.images = data.items;
            if (!data) {this.routee.navigate(['login']) }
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get('id')
      this.searchImages(this.id)
    });
  }

}
