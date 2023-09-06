import { TestBed } from '@angular/core/testing';

import { FetchBookResolver } from './fetch-book.resolver';

describe('FetchBookResolver', () => {
  let resolver: FetchBookResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchBookResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
