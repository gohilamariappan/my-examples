import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdRelComponent } from './edit-prod-rel.component';

describe('EditProdRelComponent', () => {
  let component: EditProdRelComponent;
  let fixture: ComponentFixture<EditProdRelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProdRelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProdRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
