import { TestBed } from '@angular/core/testing';

import { MserviceService } from './mservice.service';

describe('MserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MserviceService = TestBed.get(MserviceService);
    expect(service).toBeTruthy();
  });
});
