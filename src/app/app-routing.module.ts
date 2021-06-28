import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { AlbumComponent } from './album/album.component';
import { ImageComponent } from './image/image.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { AuthGuard } from './_service/auth-guard.service';

const routes:Routes = [
  {path:'artist/:id', component:AlbumComponent},
  {path:'search/:id', component:ImageComponent},
  {path:'rating',component:RatingComponent},
  {  
    path: 'search',  
    component: ImageComponent,  
    canActivate: [AuthGuard],  
    data: {  
      title: 'Home'   
    }  
  },  
  {  
    path: 'login',  
    component: LoginButtonComponent,  
    data: {  
      title: 'Login'  
    }  
  },  
  {  
    path: '',  
    component: LoginButtonComponent,  
    data: {  
      title: 'Login'  
    }  
  }  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
