import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ImageComponent } from './components/image-list/image.component';
import { NoopInterceptor } from './MyInterceptor';
import { ArtistService } from './services/artist.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { RatingComponent } from './components/rating/rating.component';
import { AlbumComponent } from './components/album/album.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumService } from './services/album.service';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { LogoutComponent } from './components/logout-button/logout.component';
import { InputSearchComponent } from './components/input-search/input-search.component';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];
@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    NavbarComponent,  
    LoginButtonComponent,
    RatingComponent,
    AlbumComponent,
    LoginComponent,
    SearchComponent,
    AlbumsComponent,
    LogoutComponent,
    InputSearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HttpClient, ArtistService,AlbumService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
