import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FeaturedDishesComponent } from '../featured-dishes/featured-dishes.component';
import { TopRestaurantsComponent } from '../top-restaurants/top-restaurants.component';
import { restaurantsByCity, restaurantsByCuisine } from '../../data/restaurants-data';
import { FindRestaurantsComponent } from '../find-restaurants/find-restaurants.component';
import { FooterComponent } from '../footer/footer.component';
import { UserAuthenticationService } from '../user-authentication.service';
import { SignInPanelComponent } from '../sign-in-panel/sign-in-panel.component';
import { BottomToastComponent } from '../bottom-toast/bottom-toast.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FeaturedDishesComponent, TopRestaurantsComponent,
    FindRestaurantsComponent,
    FooterComponent, SignInPanelComponent, BottomToastComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  contentCity = restaurantsByCity;
  contentCuisine = restaurantsByCuisine;
  showPanel:boolean = false;
  
  constructor (private authService: UserAuthenticationService) {
    this.authService.showSignInPanel.subscribe(value => {
      this.showPanel = value;
    });
  }

}
