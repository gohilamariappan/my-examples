import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRagComponent } from './add-rag.component';

describe('AddRagComponent', () => {
  let component: AddRagComponent;
  let fixture: ComponentFixture<AddRagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
