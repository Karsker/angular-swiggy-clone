import { TestBed } from '@angular/core/testing';

import { RestaurantHandlerService } from './restaurant-handler.service';

describe('RestaurantHandlerService', () => {
  let service: RestaurantHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
