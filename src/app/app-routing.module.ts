import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { AlbumComponent } from './album/album.component';

const routes:Routes = [
  {path:'artist/:id', component:AlbumComponent},
  {path:'rating',component:RatingComponent},
  // {path:'',component:ImageComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
