import { TestBed } from '@angular/core/testing';

import { TVFakeService } from './tvfake.service';

describe('TVFakeService', () => {
  let service: TVFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TVFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
