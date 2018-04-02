import { TestBed, inject } from '@angular/core/testing';

import { FormstoroutesService } from './formstoroutes.service';

describe('FormstoroutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormstoroutesService]
    });
  });

  it('should be created', inject([FormstoroutesService], (service: FormstoroutesService) => {
    expect(service).toBeTruthy();
  }));
});
