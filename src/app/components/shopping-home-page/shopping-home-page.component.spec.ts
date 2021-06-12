import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingHomePageComponent } from './shopping-home-page.component';

describe('ShoppingHomePageComponent', () => {
  let component: ShoppingHomePageComponent;
  let fixture: ComponentFixture<ShoppingHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
