import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DisplayShowsInfoComponent } from './display-shows-info/display-shows-info.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowSearchComponent } from './show-search/show-search.component';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    DisplayShowsInfoComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [DisplayShowsInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
