import { TestBed } from '@angular/core/testing';

import { StoreBlogService } from './storeblog.service';

describe('StoreblogService', () => {
  let service: StoreBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
