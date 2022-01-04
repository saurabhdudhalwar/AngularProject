import { TestBed } from '@angular/core/testing';

import { InstserviceService } from './instservice.service';

describe('InstserviceService', () => {
  let service: InstserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
