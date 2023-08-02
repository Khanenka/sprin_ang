/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaccountsService } from './saccounts.service';

describe('Service: Saccounts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaccountsService]
    });
  });

  it('should ...', inject([SaccountsService], (service: SaccountsService) => {
    expect(service).toBeTruthy();
  }));
});
