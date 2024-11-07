import { Component } from '@angular/core';
import { RestaurantDetails, TopPickDish } from '../../types';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { restaurantMenus } from '../../data/restaurants-data';
import { CartRefreshPromptComponent } from '../cart-refresh-prompt/cart-refresh-prompt.component';
import { NgFor } from '@angular/common';
import { SignInPanelComponent } from '../sign-in-panel/sign-in-panel.component';
import { RestaurantHeaderComponent } from '../restaurant-header/restaurant-header.component';
import { TopPickCardComponent } from '../top-pick-card/top-pick-card.component';
import { BottomToastComponent } from '../bottom-toast/bottom-toast.component';

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [NavbarComponent, MenuCardComponent, NgFor, CartRefreshPromptComponent, SignInPanelComponent, RestaurantHeaderComponent, TopPickCardComponent, BottomToastComponent],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.scss'
})
export class RestaurantPageComponent {
  restaurantDetails!:RestaurantDetails;
  restaurantId!:string|null;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.restaurantId = this.route.snapshot.paramMap.get('name');
    const seearchRes = restaurantMenus.find(r => r.id == this.restaurantId)
    if (seearchRes) {
      this.restaurantDetails = seearchRes;
      
    }
  }
}
