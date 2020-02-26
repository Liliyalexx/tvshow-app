import { Component, OnInit } from '@angular/core';
import { IDisplayShows } from '../idisplay-shows';
import {DisplayShowsService} from '../display-shows.service'

@Component({
  selector: 'app-display-shows-info',
  templateUrl: './display-shows-info.component.html',
  styleUrls: ['./display-shows-info.component.css']
})
export class DisplayShowsInfoComponent implements OnInit {

current: IDisplayShows

constructor(private displayshowsService: DisplayShowsService) { 
  
  }
  ngOnInit() {
  this.displayshowsService.getDisplayShowsInfo ('Girls')
  .subscribe (data => this.current = data)


  }
     
}
   
  
