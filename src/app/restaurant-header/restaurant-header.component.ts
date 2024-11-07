import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './restaurant-header.component.html',
  styleUrl: './restaurant-header.component.scss'
})
export class RestaurantHeaderComponent {
  @Input() rating!:number;
  @Input() tags!:string[];
  @Input() deliveryTime!:string;
  @Input() outlet!:string;
}
