import { Component, OnInit } from '@angular/core';
import { IDisplayShows } from '../idisplay-shows';

@Component({
  selector: 'app-display-shows-info',
  templateUrl: './display-shows-info.component.html',
  styleUrls: ['./display-shows-info.component.css']
})
export class DisplayShowsInfoComponent implements OnInit {
current: IDisplayShows
  constructor() { 
    this.current = {
      name: 'Girls',
      genres: 'Romance | Drama',
      lanuage: 'English',
      status: 'Ended',
      runtime: 30,
      image: '',
      summury: ''
}
    } as IDisplayShows {}

      ngOnInit()

}
   
  
