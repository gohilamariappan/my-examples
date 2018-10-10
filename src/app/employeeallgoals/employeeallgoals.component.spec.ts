import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeallgoalsComponent } from './employeeallgoals.component';

describe('EmployeeallgoalsComponent', () => {
  let component: EmployeeallgoalsComponent;
  let fixture: ComponentFixture<EmployeeallgoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeallgoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeallgoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
