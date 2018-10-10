import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCaparComponent } from './list-capar.component';

describe('ListCaparComponent', () => {
  let component: ListCaparComponent;
  let fixture: ComponentFixture<ListCaparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCaparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCaparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
