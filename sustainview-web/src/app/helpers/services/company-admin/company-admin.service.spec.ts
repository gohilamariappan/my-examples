import { TestBed, inject } from '@angular/core/testing';

import { CompanyAdminService } from './company-admin.service';

describe('CompanyAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyAdminService]
    });
  });

  it('should be created', inject([CompanyAdminService], (service: CompanyAdminService) => {
    expect(service).toBeTruthy();
  }));
});
