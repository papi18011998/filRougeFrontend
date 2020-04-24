import { TestBed } from '@angular/core/testing';

import { AddUserService } from './add-user.service';

describe('AddUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddUserService = TestBed.get(AddUserService);
    expect(service).toBeTruthy();
  });
});
