import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryEmployeeComponent } from './history-employee.component';

describe('HistoryEmployeeComponent', () => {
  let component: HistoryEmployeeComponent;
  let fixture: ComponentFixture<HistoryEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
