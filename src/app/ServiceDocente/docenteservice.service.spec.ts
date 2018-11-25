import { TestBed } from '@angular/core/testing';

import { DocenteserviceService } from './docenteservice.service';

describe('DocenteserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocenteserviceService = TestBed.get(DocenteserviceService);
    expect(service).toBeTruthy();
  });
});
