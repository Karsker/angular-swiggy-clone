import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRestaurantCardComponent } from './find-restaurant-card.component';

describe('FindRestaurantCardComponent', () => {
  let component: FindRestaurantCardComponent;
  let fixture: ComponentFixture<FindRestaurantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindRestaurantCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindRestaurantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
