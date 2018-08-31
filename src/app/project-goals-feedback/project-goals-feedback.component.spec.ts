import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGoalsFeedbackComponent } from './project-goals-feedback.component';

describe('ProjectGoalsFeedbackComponent', () => {
  let component: ProjectGoalsFeedbackComponent;
  let fixture: ComponentFixture<ProjectGoalsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectGoalsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGoalsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
