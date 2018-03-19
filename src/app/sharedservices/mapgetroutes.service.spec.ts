import { TestBed, inject } from '@angular/core/testing';

import { MapgetroutesService } from './mapgetroutes.service';

describe('MapgetroutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapgetroutesService]
    });
  });

  it('should be created', inject([MapgetroutesService], (service: MapgetroutesService) => {
    expect(service).toBeTruthy();
  }));
});
