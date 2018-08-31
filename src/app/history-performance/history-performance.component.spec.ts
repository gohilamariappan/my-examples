import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPerformanceComponent } from './history-performance.component';

describe('HistoryPerformanceComponent', () => {
  let component: HistoryPerformanceComponent;
  let fixture: ComponentFixture<HistoryPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
