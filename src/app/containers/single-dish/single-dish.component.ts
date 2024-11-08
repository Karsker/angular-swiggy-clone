import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-dish',
  standalone: true,
  imports: [],
  templateUrl: './single-dish.component.html',
  styleUrl: './single-dish.component.scss'
})
export class SingleDishComponent {
  @Input() imgSrc!:string;
  @Input() imgAlt!:string;
}
