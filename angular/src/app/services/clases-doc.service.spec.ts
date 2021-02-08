import { TestBed } from '@angular/core/testing';

import { ClasesDocService } from './clases-doc.service';

describe('ClasesDocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasesDocService = TestBed.get(ClasesDocService);
    expect(service).toBeTruthy();
  });
});
