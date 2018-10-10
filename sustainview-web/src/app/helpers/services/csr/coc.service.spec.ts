import { TestBed, inject } from '@angular/core/testing';

import { CocService } from './coc.service';

describe('CocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CocService]
    });
  });

  it('should be created', inject([CocService], (service: CocService) => {
    expect(service).toBeTruthy();
  }));
});
