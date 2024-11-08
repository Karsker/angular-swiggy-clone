import { Component } from '@angular/core';
import { CartHandlerService } from '../../services/cart-handler/cart-handler.service';
import { RestaurantHandlerService } from '../../services/restaurant-handler/restaurant-handler.service';
import { CartItem, RestaurantDetails } from '../../../types';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../containers/navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { UserAuthenticationService } from '../../services/user-authentication/user-authentication.service';
import { SignInPanelComponent } from '../../containers/sign-in-panel/sign-in-panel.component';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NavbarComponent, NgFor, NgIf, RouterLink, SignInPanelComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  
  restaurantDetails!:RestaurantDetails | null;
  cartItems!:CartItem[];
  totalAmount!:number;

  /**
   * Creates an instance of CartPageComponent.
   * @param {CartHandlerService} cartHandler
   * @param {RestaurantHandlerService} restaurantHandler
   * @param {UserAuthenticationService} auth
   * @memberof CartPageComponent
   */
  constructor (private cartHandler: CartHandlerService, private restaurantHandler: RestaurantHandlerService, private auth: UserAuthenticationService) {
    const resQueryRes = this.restaurantHandler.getRestaurantFromId(this.cartHandler.getCurrentRestaurantId());
    if (resQueryRes) {
      this.restaurantDetails = resQueryRes as RestaurantDetails;
      this.cartItems = this.cartHandler.getCartItems();
      this.calculateBill();
    }
  };

  // Function to update the quantity of the item when the item is changed from the template
  
  updateQuantity(itemId: number, event: Event) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id == itemId) {

        // Get the value of current quantity
        const newQuantity = parseInt((event.target as HTMLInputElement).value);

        // If the quantity is 0, remove the item from the cart
        if (newQuantity == 0) {
          this.cartItems.splice(i,1);
          break;
        }

        // Else update the quantity and amount
        this.cartItems[i].quantity = newQuantity
        this.cartItems[i].amount = this.cartItems[i].price * this.cartItems[i].quantity;
        this.calculateBill();
        break;
      }
    }
    // If the cart is empty, set the restaurant value to null
    if (this.cartItems.length == 0) {
      this.restaurantDetails = null;
      window.sessionStorage.removeItem('restaurantId');
      return;
    }
    this.cartHandler.writeToStorage();
  }


  calculateBill() {
    
    this.totalAmount = 0;
    this.cartItems.forEach(item => {
      this.totalAmount += item.amount;
    });

  }

  // Function to checkout
  checkout() {
    if (!this.auth.currentUser.value) {
      alert('Sign in to place order');
    } else {
      alert('Order placed successfully');
    }
  }

}
