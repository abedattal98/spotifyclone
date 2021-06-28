import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { AlbumComponent } from './album/album.component';
import { ImageComponent } from './image/image.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { AuthGuard } from './_service/auth-guard.service';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { Observable, of } from 'rxjs';

const routes:Routes = [
  {path:'artist/:id', component:AlbumComponent},
  {path:'rating',component:RatingComponent},
  // {path:'search',component:ImageComponent},
  // { path:'login', component:LoginButtonComponent },
  // { path: '',   redirectTo: '/login', pathMatch: 'full' }
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
  }  ,
  {
    path: 'test',
    component: GitAuthComponent,
    resolve: {
    url: ExtUrlResolverService
    }
    },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export class ExtUrlResolverService implements Resolve<any> {
  constructor() { }
  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>
  {
  window.location.href=route.queryParamMap.get('url');
  return of(null);
  }}