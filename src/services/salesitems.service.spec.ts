import { TestBed, inject } from '@angular/core/testing';

import { SalesitemsService } from './salesitems.service';

describe('SalesitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesitemsService]
    });
  });

  it('should be created', inject([SalesitemsService], (service: SalesitemsService) => {
    expect(service).toBeTruthy();
  }));
});
