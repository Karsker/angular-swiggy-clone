import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../types';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  private usersEndpoint = "https://67160dc733bc2bfe40bc2ca3.mockapi.io/api/swiggy/users";
  currentUser = new BehaviorSubject<User|null>(null);
  showSignInPanel = new BehaviorSubject<boolean>(false);
  showSignUpPanel = new BehaviorSubject<boolean>(false);

  setCurrentUser(user: User | null) {
    this.currentUser.next(user);
  }

  setShowSignInPanel(status: boolean) {
    this.showSignInPanel.next(status);
  }

  setShowSignUpPanel(status: boolean) {
    this.showSignUpPanel.next(status);
  }

  constructor(private httpClient: HttpClient) {
    
      // Check if user details are available in session storage
      if (window.sessionStorage.getItem('loggedIn') && window.sessionStorage.getItem('loggedIn') == 'true') {
        const user = window.sessionStorage.getItem('userDetails');
        if (user) {
          this.setCurrentUser(JSON.parse(user));
        }
      }

  }
  
  // Function to create a user account
  addUser(userData: User) {
    
    return this.httpClient.post(
      this.usersEndpoint, 
      JSON.stringify(userData),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  // Function to login the user
  login(phone: string) {
    // Check if a user with the entered number exists
    this.httpClient.get(this.usersEndpoint).subscribe(res => {
      const users = res as User[];
      const userQuery = users.find(user => user.phone == phone);
      if (userQuery) {
         this.setCurrentUser(userQuery);

         // Save the user details to session storage
         window.sessionStorage.setItem('loggedIn', 'true');
         window.sessionStorage.setItem('userDetails', JSON.stringify(this.currentUser.value));
         console.log("Login successful");
         this.setShowSignInPanel(false);
         return this.currentUser.value;
      }
      return null;
    });

  }

  // Function to logout the currently logged in user
  signOut() {
    this.setCurrentUser(null);
    window.sessionStorage.clear();
  }

}
