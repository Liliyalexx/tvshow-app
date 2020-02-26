import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IDisplayShowsData } from "./idisplay-shows-data";
import { environment } from 'src/environments/environment';
import { IDisplayShows } from './idisplay-shows';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { DisplayShowsInfoComponent } from './display-shows-info/display-shows-info.component';
import { ItvshowService } from './itvshow-service';

@Injectable({
  providedIn: 'root'
})
export class DisplayShowsService implements ItvshowService{

  constructor(private httpClient: HttpClient) { }

getDisplayShowsInfo (name: string): 
Observable<IDisplayShows> {
 return this.httpClient.get<IDisplayShowsData[]>(`${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}&appid=${environment.appId}`).pipe(map(data=>this.transformToIDisplayShows(data))
 )
}
private transformToIDisplayShows(data: 
  IDisplayShowsData[]) : IDisplayShows {
    return {
      name: data[0].show.name,
      genres: data[0].show.genres[0],
      language: data[0].show.language,
      status: data[0].show.status,
      runtime: data[0].show.runtime,
      image: data[0].show.image.medium,
      summary: data[0].show.summary
}

    }
  }


