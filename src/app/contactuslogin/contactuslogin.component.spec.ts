import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusloginComponent } from './contactuslogin.component';

describe('ContactusloginComponent', () => {
  let component: ContactusloginComponent;
  let fixture: ComponentFixture<ContactusloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
