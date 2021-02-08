import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IndexesService } from './indexes.service';

describe('IndexesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexesService = TestBed.get(IndexesService);
    expect(service).toBeTruthy();
  });
});
