/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaccountsnumberService } from './saccountsnumber.service';

describe('Service: Saccountsnumber', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaccountsnumberService]
    });
  });

  it('should ...', inject([SaccountsnumberService], (service: SaccountsnumberService) => {
    expect(service).toBeTruthy();
  }));
});
