import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalGoalsComponent } from './organizational-goals.component';

describe('OrganizationalGoalsComponent', () => {
  let component: OrganizationalGoalsComponent;
  let fixture: ComponentFixture<OrganizationalGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
