import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdditionalAddressComponent } from './edit-additional-address.component';

describe('EditAdditionalAddressComponent', () => {
  let component: EditAdditionalAddressComponent;
  let fixture: ComponentFixture<EditAdditionalAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdditionalAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdditionalAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
