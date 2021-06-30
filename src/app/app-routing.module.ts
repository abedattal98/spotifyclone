import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { AlbumsComponent } from './pages/albums/albums.component';

const routes:Routes = [
  {path:'artist/:id', component:AlbumsComponent},
  {path:'search/:id', component:SearchComponent},
  {  
    path: 'search',  
    component: SearchComponent,  
    canActivate: [AuthGuard],  
    data: {  
      title: 'Home'   
    }  
  },  
  {  
    path: 'login',  
    component: LoginComponent,  
    data: {  
      title: 'Login'  
    }  
  },  
  {  
    path: '',  
    component: LoginComponent,  
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
