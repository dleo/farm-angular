import { TestBed, inject } from '@angular/core/testing';

import { VarietiesService } from './varieties.service';

describe('VarietiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VarietiesService]
    });
  });

  it('should be created', inject([VarietiesService], (service: VarietiesService) => {
    expect(service).toBeTruthy();
  }));
});
