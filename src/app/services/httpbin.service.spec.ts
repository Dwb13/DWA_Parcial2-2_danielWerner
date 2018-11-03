import { TestBed } from '@angular/core/testing';

import { HttpbinService } from './httpbin.service';

describe('HttpbinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpbinService = TestBed.get(HttpbinService);
    expect(service).toBeTruthy();
  });
});
