import { TestBed } from '@angular/core/testing';

import { MaintenanceServiceInterceptorInterceptor } from './maintenance-service-interceptor.interceptor';

describe('MaintenanceServiceInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MaintenanceServiceInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MaintenanceServiceInterceptorInterceptor = TestBed.inject(MaintenanceServiceInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
