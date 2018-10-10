import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSaveListComponent } from './view-save-list.component';

describe('ViewSaveListComponent', () => {
  let component: ViewSaveListComponent;
  let fixture: ComponentFixture<ViewSaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
