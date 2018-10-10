import { TestBed, inject } from '@angular/core/testing';

import { CaparService } from './capar.service';

describe('CaparService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaparService]
    });
  });

  it('should be created', inject([CaparService], (service: CaparService) => {
    expect(service).toBeTruthy();
  }));
});
