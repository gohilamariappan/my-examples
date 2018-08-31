import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalGoalsComponent } from './technical-goals.component';

describe('TechnicalGoalsComponent', () => {
  let component: TechnicalGoalsComponent;
  let fixture: ComponentFixture<TechnicalGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
