import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductionFacilityComponent } from './list-production-facility.component';

describe('ListProductionFacilityComponent', () => {
  let component: ListProductionFacilityComponent;
  let fixture: ComponentFixture<ListProductionFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductionFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductionFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
