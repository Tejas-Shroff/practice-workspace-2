import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { FindmovieComponent } from './findmovie/findmovie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';


const routes: Routes = [
  {path:'listmovies',component:ListMoviesComponent},
  {path:'findmovie/:id',component:FindmovieComponent},
  {path:'addMovie',component:AddmovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
