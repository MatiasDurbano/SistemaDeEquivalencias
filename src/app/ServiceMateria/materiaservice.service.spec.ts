import { TestBed } from '@angular/core/testing';

import { MateriaserviceService } from './materiaservice.service';

describe('MateriaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MateriaserviceService = TestBed.get(MateriaserviceService);
    expect(service).toBeTruthy();
  });
});
