import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualGoalsComponent } from './individual-goals.component';

describe('IndividualGoalsComponent', () => {
  let component: IndividualGoalsComponent;
  let fixture: ComponentFixture<IndividualGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
