import { Component } from '@angular/core';
import { CartHandlerService } from '../cart-handler.service';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-bottom-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './bottom-toast.component.html',
  styleUrl: './bottom-toast.component.scss'
})
export class BottomToastComponent {
  showPrompt!:boolean;
  constructor(private cartHandler: CartHandlerService){
    this.cartHandler.itemAddedToast.subscribe(value => {
      this.showPrompt = value;
    });
  }

}
