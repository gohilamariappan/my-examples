import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsMidYearComponent } from './goals-mid-year.component';

describe('GoalsMidYearComponent', () => {
  let component: GoalsMidYearComponent;
  let fixture: ComponentFixture<GoalsMidYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsMidYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsMidYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
