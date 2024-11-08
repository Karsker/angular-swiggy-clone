import { Component, Input } from '@angular/core';
import { TopPickDish } from '../../../types';

@Component({
  selector: 'app-top-pick-card',
  standalone: true,
  imports: [],
  templateUrl: './top-pick-card.component.html',
  styleUrl: './top-pick-card.component.scss'
})
export class TopPickCardComponent {
  @Input() dish!:TopPickDish;
}
