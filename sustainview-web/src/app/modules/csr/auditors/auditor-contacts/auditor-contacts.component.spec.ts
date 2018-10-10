import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorContactsComponent } from './auditor-contacts.component';

describe('AuditorContactsComponent', () => {
  let component: AuditorContactsComponent;
  let fixture: ComponentFixture<AuditorContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
