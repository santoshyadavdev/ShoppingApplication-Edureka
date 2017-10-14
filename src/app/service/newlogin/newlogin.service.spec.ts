import { TestBed, inject } from '@angular/core/testing';

import { NewloginService } from './newlogin.service';

describe('NewloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewloginService]
    });
  });

  it('should be created', inject([NewloginService], (service: NewloginService) => {
    expect(service).toBeTruthy();
  }));
});
