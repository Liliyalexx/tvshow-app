import { TestBed } from '@angular/core/testing';
import{HttpClientTestingModule} from '@angular/common/http/testing'
import { DisplayShowsService } from './display-shows.service';

describe('DisplayShowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));
    

  it('should be created', () => {
    const service: DisplayShowsService = TestBed.get(DisplayShowsService);
    expect(service).toBeTruthy();
  });
});
