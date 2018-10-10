import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductionFacilityComponent } from './add-production-facility.component';

describe('AddProductionFacilityComponent', () => {
  let component: AddProductionFacilityComponent;
  let fixture: ComponentFixture<AddProductionFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductionFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductionFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
