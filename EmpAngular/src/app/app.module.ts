import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { FindemployeeComponent } from './findemployee/findemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListemployeeComponent,
    FindemployeeComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    DeleteemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Reactive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
