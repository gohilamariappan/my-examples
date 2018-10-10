import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdditionalAddressComponent } from './list-additional-address.component';

describe('ListAdditionalAddressComponent', () => {
  let component: ListAdditionalAddressComponent;
  let fixture: ComponentFixture<ListAdditionalAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdditionalAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdditionalAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
