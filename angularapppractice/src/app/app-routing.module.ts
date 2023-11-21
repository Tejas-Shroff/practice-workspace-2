import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FindComponent } from './find/find.component';
// import { Component } from '@angular/core';


const routes: Routes = [
 { path : 'ListMovies', component : ListComponent},
 { path : 'AddMovie', component : CreateComponent},
 { path : 'EditMovie/:id', component : EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
