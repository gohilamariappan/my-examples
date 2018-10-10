import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEngagementRulesComponent } from './view-engagement-rules.component';

describe('ViewEngagementRulesComponent', () => {
  let component: ViewEngagementRulesComponent;
  let fixture: ComponentFixture<ViewEngagementRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEngagementRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEngagementRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
