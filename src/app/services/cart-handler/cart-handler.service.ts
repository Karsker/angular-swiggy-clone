import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../../types';
@Injectable({
  providedIn: 'root'
})
export class CartHandlerService {
  private restaurantId!: string;
  private cartItems:CartItem[] = [];
  private waitingItem!:CartItem;
  private waitingRestaurantId!:string;

  refreshPrompt = new BehaviorSubject<boolean>(false);
  itemAddedToast = new BehaviorSubject<boolean>(false);

  private setRefreshPrompt(status: boolean) {
    this.refreshPrompt.next(status);
  }

  // Function to update the status of the item added toast
  setItemAddedToast(status: boolean) {
    this.itemAddedToast.next(status);
  }

  // Function to add the waiting item when the user agrees to refresh the cart
  addWaitingItem() {
    this.cartItems = [this.waitingItem];
    this.restaurantId = this.waitingRestaurantId;
    this.setRefreshPrompt(false);

    this.setItemAddedToast(true);
    this.writeToStorage();
    setTimeout(() => {this.setItemAddedToast(false)}, 3000);
    
  }

  // Function to cancel adding the waiting item when user refuses to refresh the cart
  cancelAddingItem() {
    this.setRefreshPrompt(false);
  }

  // Function to add an item to the cart
  addToCart(restaurantId: string, id: number, itemName: string, price: number, veg: boolean) {

    // Check if the restaurantId is different from the current Id
    if (this.restaurantId && this.restaurantId != restaurantId) {
      this.setRefreshPrompt(true);
      this.waitingItem = {
        id,
        itemName,
        price,
        quantity: 1,
        veg,
        amount: price
      };
      this.waitingRestaurantId = restaurantId;
      return;
    }

    this.restaurantId = restaurantId;
    
    
    if (this.cartItems.find(item => item.id == id)) {
      this.cartItems = this.cartItems.map(item => {
        if (item.id == id) {
          item.quantity += 1;
          item.amount += item.price;
          return item;
        } else {
          return item;
        }
      })

      
    } else {
      const newItem:CartItem = {
        id,
        itemName,
        price,
        quantity: 1,
        veg,
        amount: price
      }

      this.cartItems.push(newItem);
    }
    this.writeToStorage();
    this.setItemAddedToast(true);
    setTimeout(() => {this.setItemAddedToast(false)}, 3000);
    
  }

  // Function to write/sync the cart to session storage
  writeToStorage() {
    window.sessionStorage.setItem('restaurantId', this.restaurantId);
    window.sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  // Getter function to get the id of the current restaurant
  getCurrentRestaurantId() {
    return this.restaurantId;
  }

  // Getter function to get the cart items
  getCartItems() {
    return this.cartItems;
  }

  constructor() {
    // Fetch the cart items from session storage
    const cartItemsFromStorage = window.sessionStorage.getItem('cart');
    const restaurantIdFromStorage = window.sessionStorage.getItem('restaurantId');

    if (cartItemsFromStorage && restaurantIdFromStorage) {
      this.cartItems = JSON.parse(cartItemsFromStorage) as CartItem[];
      this.restaurantId = restaurantIdFromStorage;
      console.log("Fetched cart items from session storage: ");
      this.cartItems.forEach(item => console.log(item));

      
    }

  }
}
