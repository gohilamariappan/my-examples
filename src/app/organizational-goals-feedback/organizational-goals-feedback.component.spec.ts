import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalGoalsFeedbackComponent } from './organizational-goals-feedback.component';

describe('OrganizationalGoalsFeedbackComponent', () => {
  let component: OrganizationalGoalsFeedbackComponent;
  let fixture: ComponentFixture<OrganizationalGoalsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalGoalsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalGoalsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
