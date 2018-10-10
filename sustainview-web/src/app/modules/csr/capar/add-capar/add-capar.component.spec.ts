import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaparComponent } from './add-capar.component';

describe('AddCaparComponent', () => {
  let component: AddCaparComponent;
  let fixture: ComponentFixture<AddCaparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
