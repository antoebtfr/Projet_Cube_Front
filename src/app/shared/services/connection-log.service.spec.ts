import { TestBed } from '@angular/core/testing';

import { ConnectionLogService } from './connection-log.service';

describe('ConnectionLogService', () => {
  let service: ConnectionLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
