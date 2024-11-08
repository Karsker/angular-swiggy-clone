import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar-link.component.html',
  styleUrl: './navbar-link.component.scss'
})
export class NavbarLinkComponent {
  @Input() title!:string;
  @Input() imgSrc!:string;
  @Input() imgAlt!:string;

}
