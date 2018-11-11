import { TestBed } from '@angular/core/testing';

import { PipoService } from './pipo.service';

describe('PipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PipoService = TestBed.get(PipoService);
    expect(service).toBeTruthy();
  });
});
