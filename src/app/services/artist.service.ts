import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArtistService {
  private ARTIST_URL: string = environment.ARTIST_URL;
  private SPOTIFY_AUTH: string = localStorage.getItem('accessToken')
  constructor(private apiCaller: HttpClient) {
  }  
  getImage(artist:string) {
    let headers = new HttpHeaders({
        "Accept" : 'application/json' ,
        'Content-Type':  'application/json',
        'Authorization' : 'Bearer ' + this.SPOTIFY_AUTH
      })
    return this.apiCaller.get(this.ARTIST_URL+'search?q=' + artist + '&type=artist',{headers});
}}
