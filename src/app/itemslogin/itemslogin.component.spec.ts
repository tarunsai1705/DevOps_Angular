import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsloginComponent } from './itemslogin.component';

describe('ItemsloginComponent', () => {
  let component: ItemsloginComponent;
  let fixture: ComponentFixture<ItemsloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
