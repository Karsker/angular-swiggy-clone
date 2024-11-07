import { Component, Input } from '@angular/core';
import { FindRestaurantCardComponent } from '../find-restaurant-card/find-restaurant-card.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-find-restaurants',
  standalone: true,
  imports: [FindRestaurantCardComponent, NgFor],
  templateUrl: './find-restaurants.component.html',
  styleUrl: './find-restaurants.component.scss'
})
export class FindRestaurantsComponent {
  @Input() data!:string[];
  @Input() title!:string;
}
