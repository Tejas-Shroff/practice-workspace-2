import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { FindmovieComponent } from './findmovie/findmovie.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ReactformComponent } from './reactform/reactform.component';
// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListmovieComponent,
    FindmovieComponent,
    MenuComponent,
    AddMovieComponent,
    EditmovieComponent,
    DeletemovieComponent,
    ReactformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
