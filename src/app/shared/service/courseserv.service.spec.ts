import { TestBed } from '@angular/core/testing';

import { CourseservService } from './courseserv.service';

describe('CourseservService', () => {
  let service: CourseservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
