/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountsbyidService } from './accountsbyid.service';

describe('Service: Accountsbyid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountsbyidService]
    });
  });

  it('should ...', inject([AccountsbyidService], (service: AccountsbyidService) => {
    expect(service).toBeTruthy();
  }));
});
