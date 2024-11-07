import { Component } from '@angular/core';
import { NavbarLinkComponent } from '../navbar-link/navbar-link.component';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserAuthenticationService } from '../user-authentication.service';
import { User } from '../../types';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarLinkComponent, NgFor, RouterLink, NgIf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentUser!:User|null;
  links = [
    {
      title: "Swiggy Corporate",
      imgSrc: "../../assets/icons/swiggy-corporate-icon.png" ,
      imgAlt: "swiggy-corporate"
    },
    {
      title: "Search",
      imgSrc: "../../assets/icons/search-icon.png",
      imgAlt: "search"
    },
    {
      title: "Offers",
      imgSrc: "../../assets/icons/offers-icon.png",
      imgAlt: "offer"
    },
    {
      title: "Help",
      imgSrc: "../../assets/icons/help-icon.png",
      imgAlt: "help"
    },
    
  ];
  open:boolean = false;
  constructor(private authService: UserAuthenticationService) {
    this.authService.currentUser.subscribe(value => {
      this.currentUser = value;
    });
  }

  handleSignIn() {
    this.authService.setShowSignInPanel(true);
  }

  handleSignOut() {
    this.authService.signOut();
  }

  toggleMenu() {
    this.open = !this.open;
  }
}
