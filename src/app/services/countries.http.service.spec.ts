import { TestBed } from '@angular/core/testing';

import { Countries.HttpService } from './countries.http.service';

describe('Countries.HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Countries.HttpService = TestBed.get(Countries.HttpService);
    expect(service).toBeTruthy();
  });
});
