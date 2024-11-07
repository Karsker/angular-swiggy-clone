import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRestaurantsComponent } from './find-restaurants.component';

describe('FindRestaurantsComponent', () => {
  let component: FindRestaurantsComponent;
  let fixture: ComponentFixture<FindRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
