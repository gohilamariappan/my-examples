import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCocComponent } from './edit-coc.component';

describe('EditCocComponent', () => {
  let component: EditCocComponent;
  let fixture: ComponentFixture<EditCocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
