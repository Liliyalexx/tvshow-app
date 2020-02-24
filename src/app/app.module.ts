import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayShowsInfoComponent } from './display-shows-info/display-shows-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayShowsInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
