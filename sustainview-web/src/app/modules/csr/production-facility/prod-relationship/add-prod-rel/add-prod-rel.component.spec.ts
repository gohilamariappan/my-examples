import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdRelComponent } from './add-prod-rel.component';

describe('AddProdRelComponent', () => {
  let component: AddProdRelComponent;
  let fixture: ComponentFixture<AddProdRelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProdRelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
