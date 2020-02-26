import { Injectable } from '@angular/core';
import { ItvshowService } from './itvshow-service';
import { IDisplayShows } from './idisplay-shows';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TVFakeService implements ItvshowService{
private fakeTV: IDisplayShows ={
  name: 'Girls',
  genres: 'Roman',
  language: 'English',
  status: 'Ended',
  runtime: 30,
  image: '',
  summary: ''
}
constructor() { }
public getDisplayShowsInfo(name:string):
Observable <IDisplayShows>{
  return of(this.fakeTV)


}

}
