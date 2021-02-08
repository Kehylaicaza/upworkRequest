import { TestBed } from '@angular/core/testing';

import { LinkDocsService } from './link-docs.service';

describe('LinkDocsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkDocsService = TestBed.get(LinkDocsService);
    expect(service).toBeTruthy();
  });
});
