import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IDisplayShowsData } from "./IDisplayShowsData";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DisplayShowsInfoService {

  constructor(private httpClient: HttpClient) { }

getDisplayShowsInfo(name: string, status:string){
 return this.httpClient.get<IDisplayShowsData>(
    `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name},${status}&appid=${environment.appId}`
  )
}

}
