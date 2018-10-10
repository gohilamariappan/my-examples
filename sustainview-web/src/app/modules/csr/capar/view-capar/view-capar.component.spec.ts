import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCaparComponent } from './view-capar.component';

describe('ViewCaparComponent', () => {
  let component: ViewCaparComponent;
  let fixture: ComponentFixture<ViewCaparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCaparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCaparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
