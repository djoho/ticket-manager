import { TestBed, inject } from '@angular/core/testing';

import { BoardMessageService } from './board-message.service';

describe('BoardMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardMessageService]
    });
  });

  it('should be created', inject([BoardMessageService], (service: BoardMessageService) => {
    expect(service).toBeTruthy();
  }));
});
