import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGoalsComponent } from './project-goals.component';

describe('ProjectGoalsComponent', () => {
  let component: ProjectGoalsComponent;
  let fixture: ComponentFixture<ProjectGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
