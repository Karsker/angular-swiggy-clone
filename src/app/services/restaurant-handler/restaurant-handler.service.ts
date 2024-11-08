import { Injectable } from '@angular/core';
import { restaurantMenus } from '../../../data/restaurants-data';

@Injectable({
  providedIn: 'root'
})
export class RestaurantHandlerService {
  
  constructor() { }

  // Function to get details of a restaurant from their ID
  getRestaurantFromId(id: string) {
    const queryRes = restaurantMenus.find(obj => obj.id == id);
    console.log(queryRes, id);
    if (queryRes) {
      return queryRes;
    }

    return null;
  }
}
