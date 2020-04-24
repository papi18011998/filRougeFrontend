import { TestBed } from '@angular/core/testing';

import { AddCompteService } from './add-compte.service';

describe('AddCompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCompteService = TestBed.get(AddCompteService);
    expect(service).toBeTruthy();
  });
});
