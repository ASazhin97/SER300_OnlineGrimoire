import { TestBed } from '@angular/core/testing';

import { DashboardManagerService } from './dashboard-manager.service';

describe('DashboardManagerService', () => {
  let service: DashboardManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
