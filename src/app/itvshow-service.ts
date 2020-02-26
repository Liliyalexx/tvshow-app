import { IDisplayShows } from './idisplay-shows';
import { Observable } from 'rxjs';

export interface ItvshowService {
  getDisplayShowsInfo(name: string):
  Observable <IDisplayShows>
}
