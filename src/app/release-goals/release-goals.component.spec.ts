import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseGoalsComponent } from './release-goals.component';

describe('ReleaseGoalsComponent', () => {
  let component: ReleaseGoalsComponent;
  let fixture: ComponentFixture<ReleaseGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
