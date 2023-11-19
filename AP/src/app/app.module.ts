import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MenuComponent } from './menu/menu.component';
import { FindmovieComponent } from './findmovie/findmovie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MenuComponent,
    FindmovieComponent,
    AddmovieComponent,
    EditmovieComponent,
    DeletemovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
