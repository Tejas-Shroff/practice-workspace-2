import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { FindmovieComponent } from './findmovie/findmovie.component';


const routes: Routes = [
  {path:'listmovies',component:ListMoviesComponent},
  {path:'findmovie/:id',component:FindmovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
