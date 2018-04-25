import { TestBed, inject } from '@angular/core/testing';

import { UserState } from './user-state.service';

describe('UserState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserState]
    });
  });

  it('should be created', inject([UserState], (service: UserState) => {
    expect(service).toBeTruthy();
  }));
});
