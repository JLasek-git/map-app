import { TestBed } from '@angular/core/testing';

import { WorkingModeService } from './working-mode.service';

describe('WorkingModeService', () => {
  let service: WorkingModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
