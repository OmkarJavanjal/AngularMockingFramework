import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceComponentComponent } from './maintenance-component.component';

describe('MaintenanceComponentComponent', () => {
  let component: MaintenanceComponentComponent;
  let fixture: ComponentFixture<MaintenanceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
