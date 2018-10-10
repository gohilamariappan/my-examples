import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAppraisalComponent } from './report-appraisal.component';

describe('ReportAppraisalComponent', () => {
  let component: ReportAppraisalComponent;
  let fixture: ComponentFixture<ReportAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
