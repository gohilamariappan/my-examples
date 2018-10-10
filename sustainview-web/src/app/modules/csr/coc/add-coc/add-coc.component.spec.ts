import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCocComponent } from './add-coc.component';

describe('AddCocComponent', () => {
  let component: AddCocComponent;
  let fixture: ComponentFixture<AddCocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
