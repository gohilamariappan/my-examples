import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyUserComponent } from './list-company-user.component';

describe('ListCompanyUserComponent', () => {
  let component: ListCompanyUserComponent;
  let fixture: ComponentFixture<ListCompanyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompanyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompanyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
