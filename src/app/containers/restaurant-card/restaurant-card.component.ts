import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Restaurant } from '../../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss'
})
export class RestaurantCardComponent {
  @Input() restaurant!:Restaurant;
}
