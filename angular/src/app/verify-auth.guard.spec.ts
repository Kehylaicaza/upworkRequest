import { TestBed } from '@angular/core/testing';

import { VerifyAuthGuard } from './verify-auth.guard';

describe('VerifyAuthGuard', () => {
  let guard: VerifyAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
