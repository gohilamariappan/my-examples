import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGoalsFeedbackComponent } from './all-goals-feedback.component';

describe('AllGoalsFeedbackComponent', () => {
  let component: AllGoalsFeedbackComponent;
  let fixture: ComponentFixture<AllGoalsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGoalsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGoalsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
