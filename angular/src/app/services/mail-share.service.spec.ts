import { TestBed } from '@angular/core/testing';

import { MailShareService } from './mail-share.service';

describe('MailShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailShareService = TestBed.get(MailShareService);
    expect(service).toBeTruthy();
  });
});
