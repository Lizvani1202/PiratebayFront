import { TestBed } from '@angular/core/testing';

import { OrdenServiceService } from './orden-service.service';

describe('OrdenServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenServiceService = TestBed.get(OrdenServiceService);
    expect(service).toBeTruthy();
  });
});
