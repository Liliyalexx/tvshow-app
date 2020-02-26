import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DisplayShowsInfoComponent } from './display-shows-info/display-shows-info.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowSearchComponent } from './show-search/show-search.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayShowsInfoComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DisplayShowsInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
