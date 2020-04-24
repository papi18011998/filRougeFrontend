import { TestBed } from '@angular/core/testing';

import { DepotService } from './depot.service';

describe('DepotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepotService = TestBed.get(DepotService);
    expect(service).toBeTruthy();
  });
});
