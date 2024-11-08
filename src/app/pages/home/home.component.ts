import { Component } from '@angular/core';
import { NavbarComponent } from '../../containers/navbar/navbar.component';
import { FeaturedDishesComponent } from '../../containers/featured-dishes/featured-dishes.component';
import { TopRestaurantsComponent } from '../../containers/top-restaurants/top-restaurants.component';
import { restaurantsByCity, restaurantsByCuisine } from '../../../data/restaurants-data';
import { FindRestaurantsComponent } from '../../containers/find-restaurants/find-restaurants.component';
import { FooterComponent } from '../../containers/footer/footer.component';
import { UserAuthenticationService } from '../../services/user-authentication/user-authentication.service';
import { SignInPanelComponent } from '../../containers/sign-in-panel/sign-in-panel.component';
import { BottomToastComponent } from '../../containers/bottom-toast/bottom-toast.component';

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
