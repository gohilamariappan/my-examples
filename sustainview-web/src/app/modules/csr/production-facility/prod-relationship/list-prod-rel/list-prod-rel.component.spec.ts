import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdRelComponent } from './list-prod-rel.component';

describe('ListProdRelComponent', () => {
  let component: ListProdRelComponent;
  let fixture: ComponentFixture<ListProdRelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProdRelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProdRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
