import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmployeeListtComponent } from './home-employee-listt.component';

describe('HomeEmployeeListtComponent', () => {
  let component: HomeEmployeeListtComponent;
  let fixture: ComponentFixture<HomeEmployeeListtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEmployeeListtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEmployeeListtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
