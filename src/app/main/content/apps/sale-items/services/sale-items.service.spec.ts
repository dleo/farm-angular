import { TestBed, inject } from '@angular/core/testing';

import { SaleItemsService } from './sale-items.service';

describe('SaleItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleItemsService]
    });
  });

  it('should be created', inject([SaleItemsService], (service: SaleItemsService) => {
    expect(service).toBeTruthy();
  }));
});
