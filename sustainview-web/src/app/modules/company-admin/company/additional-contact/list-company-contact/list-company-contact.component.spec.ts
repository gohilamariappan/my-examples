import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyContactComponent } from './list-company-contact.component';

describe('ListCompanyContactComponent', () => {
  let component: ListCompanyContactComponent;
  let fixture: ComponentFixture<ListCompanyContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompanyContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompanyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
