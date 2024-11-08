import { Component } from '@angular/core';
import { CartHandlerService } from '../../services/cart-handler/cart-handler.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart-refresh-prompt',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './cart-refresh-prompt.component.html',
  styleUrl: './cart-refresh-prompt.component.scss'
})
export class CartRefreshPromptComponent {
  showPrompt!:boolean;

  refreshCart() {
    this.cartHandler.addWaitingItem();
  }

  cancelRefresh() {
    this.cartHandler.cancelAddingItem();
  }

  constructor(private cartHandler: CartHandlerService) {
    this.cartHandler.refreshPrompt.subscribe(status => {
      this.showPrompt = status;
    });
  }
}
