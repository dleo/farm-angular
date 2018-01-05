import { TestBed, inject } from '@angular/core/testing';

import { SaleitemsService } from './saleitems.service';

describe('SaleitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleitemsService]
    });
  });

  it('should be created', inject([SaleitemsService], (service: SaleitemsService) => {
    expect(service).toBeTruthy();
  }));
});
