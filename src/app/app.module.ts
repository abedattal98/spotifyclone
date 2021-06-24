import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { NoopInterceptor } from './MyInterceptor';
import { ImageService } from './artist.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { RatingComponent } from './rating/rating.component';
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];
@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    NavbarComponent,
    LoginButtonComponent,
    RatingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [HttpClient, ImageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
