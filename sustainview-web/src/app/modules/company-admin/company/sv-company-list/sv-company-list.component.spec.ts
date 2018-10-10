import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvCompanyListComponent } from './sv-company-list.component';

describe('SvCompanyListComponent', () => {
  let component: SvCompanyListComponent;
  let fixture: ComponentFixture<SvCompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvCompanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
