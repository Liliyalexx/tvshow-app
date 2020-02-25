import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DisplayShowsInfoService} from './display-shows.service'
import { AppComponent } from './app.component';
import { DisplayShowsInfoComponent } from './display-shows-info/display-shows-info.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DisplayShowsInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DisplayShowsInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
