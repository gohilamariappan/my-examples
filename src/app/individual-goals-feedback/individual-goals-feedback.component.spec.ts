import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualGoalsFeedbackComponent } from './individual-goals-feedback.component';

describe('IndividualGoalsFeedbackComponent', () => {
  let component: IndividualGoalsFeedbackComponent;
  let fixture: ComponentFixture<IndividualGoalsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualGoalsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualGoalsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
