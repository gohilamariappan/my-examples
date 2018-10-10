import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiscomComponent } from './hiscom.component';

describe('HiscomComponent', () => {
  let component: HiscomComponent;
  let fixture: ComponentFixture<HiscomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiscomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
