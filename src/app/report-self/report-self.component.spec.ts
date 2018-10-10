import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSelfComponent } from './report-self.component';

describe('ReportSelfComponent', () => {
  let component: ReportSelfComponent;
  let fixture: ComponentFixture<ReportSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
