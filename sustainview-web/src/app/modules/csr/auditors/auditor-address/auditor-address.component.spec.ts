import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorAddressComponent } from './auditor-address.component';

describe('AuditorAddressComponent', () => {
  let component: AuditorAddressComponent;
  let fixture: ComponentFixture<AuditorAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
