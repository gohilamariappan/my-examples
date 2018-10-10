import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRagComponent } from './edit-rag.component';

describe('EditRagComponent', () => {
  let component: EditRagComponent;
  let fixture: ComponentFixture<EditRagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
