import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalGoalsFeedbackComponent } from './technical-goals-feedback.component';

describe('TechnicalGoalsFeedbackComponent', () => {
  let component: TechnicalGoalsFeedbackComponent;
  let fixture: ComponentFixture<TechnicalGoalsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalGoalsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalGoalsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
