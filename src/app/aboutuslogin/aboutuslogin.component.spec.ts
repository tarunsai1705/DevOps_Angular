import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusloginComponent } from './aboutuslogin.component';

describe('AboutusloginComponent', () => {
  let component: AboutusloginComponent;
  let fixture: ComponentFixture<AboutusloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
