import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-find-restaurant-card',
  standalone: true,
  imports: [],
  templateUrl: './find-restaurant-card.component.html',
  styleUrl: './find-restaurant-card.component.scss'
})
export class FindRestaurantCardComponent {
  @Input() content!:string;
}
