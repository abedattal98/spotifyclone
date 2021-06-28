import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule , HttpClientXsrfModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { NoopInterceptor } from './MyInterceptor';
import { ArtistService } from './_service/artist.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { RatingComponent } from './rating/rating.component';
import { AlbumComponent } from './album/album.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumService } from './_service/album.service';
import { AuthenticationService } from './_service/authentication.service';
import { GitAuthComponent } from './git-auth/git-auth.component';

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
    GitAuthComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientXsrfModule
  ],
  providers: [HttpClient, ArtistService,AlbumService,AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
