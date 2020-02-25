import { TestBed } from '@angular/core/testing';

import { DisplayShowsInfoService } from './display-shows.service';

describe('DisplayShowsService', () => {
  let service: DisplayShowsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayShowsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
