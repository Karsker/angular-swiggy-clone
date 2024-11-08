import { Component, Input } from '@angular/core';
import { RestaurantMenuDish } from '../../../types';
import { NgIf } from '@angular/common';
import { CartHandlerService } from '../../services/cart-handler/cart-handler.service';
@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {
  @Input() restaurantId!:string;
  @Input() dish!:RestaurantMenuDish;

  

  addToCart() {
    this.cartHandler.addToCart(this.restaurantId, this.dish.id, this.dish.name, this.dish.price, this.dish.veg);
  }
  constructor(private cartHandler: CartHandlerService){}
}
