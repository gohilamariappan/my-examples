import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubComponent } from './viewsub.component';

describe('ViewsubComponent', () => {
  let component: ViewsubComponent;
  let fixture: ComponentFixture<ViewsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
