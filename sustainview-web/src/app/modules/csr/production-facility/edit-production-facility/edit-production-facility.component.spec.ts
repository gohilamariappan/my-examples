import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductionFacilityComponent } from './edit-production-facility.component';

describe('EditProductionFacilityComponent', () => {
  let component: EditProductionFacilityComponent;
  let fixture: ComponentFixture<EditProductionFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductionFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductionFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
