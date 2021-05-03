import { TestBed } from '@angular/core/testing';

import { IsNotConnectedGuard } from './is-not-connected.guard';

describe('IsNotConnectedGuard', () => {
  let guard: IsNotConnectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsNotConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
