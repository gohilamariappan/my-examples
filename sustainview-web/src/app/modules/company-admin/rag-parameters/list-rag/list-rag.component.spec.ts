import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRagComponent } from './list-rag.component';

describe('ListRagComponent', () => {
  let component: ListRagComponent;
  let fixture: ComponentFixture<ListRagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
