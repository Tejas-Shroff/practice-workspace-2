import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListmovieComponent } from './listmovie/listmovie.component';


const routes: Routes = [
  {path : 'listmovies',component : ListmovieComponent},
  {path : 'find/:id',component : find }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
