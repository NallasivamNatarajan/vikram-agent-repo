import { TestBed } from '@angular/core/testing';

import { MacsaliteService } from './macsalite.service';

describe('MacsaliteService', () => {
  let service: MacsaliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacsaliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
