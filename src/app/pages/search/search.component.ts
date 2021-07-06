import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  q: string = null;
  artists: any[];
  searching = false;
 
  constructor(private _artistService: ArtistService, private routess: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    if (this.routess.snapshot.paramMap.get('id')) {
      this.q = this.routess.snapshot.paramMap.get('id')
      this.searchImages(this.q);
    }
  }

  SearchEventHandler(x) {
    this.q = x;
    this.route.navigate(['search', this.q])
    this.routess.snapshot.paramMap.get('id')
    this.q = this.routess.snapshot.paramMap.get('id')
    this.searchImages(this.q);
  }

  searchImages(query: string) {
    this.searching = true;
    this._artistService.getImage(query).subscribe((data: any) => {
      this.artists = data.artists.items;
    })
  }
}
