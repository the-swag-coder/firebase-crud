import { TestBed } from '@angular/core/testing';

import { FireBaseService } from './fire-base.service';

describe('FireBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireBaseService = TestBed.get(FireBaseService);
    expect(service).toBeTruthy();
  });
});
