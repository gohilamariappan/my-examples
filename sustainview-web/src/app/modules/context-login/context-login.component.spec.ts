import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextLoginComponent } from './context-login.component';

describe('ContextLoginComponent', () => {
  let component: ContextLoginComponent;
  let fixture: ComponentFixture<ContextLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
