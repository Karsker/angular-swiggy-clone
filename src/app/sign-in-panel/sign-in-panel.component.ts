import { Component } from '@angular/core';
import { UserAuthenticationService } from '../user-authentication.service';
import { NgClass, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../types';

@Component({
  selector: 'app-sign-in-panel',
  standalone: true,
  imports: [NgClass, NgIf, ReactiveFormsModule],
  templateUrl: './sign-in-panel.component.html',
  styleUrl: './sign-in-panel.component.scss'
})
export class SignInPanelComponent {
  showPanel:boolean = false;
  showSignIn: boolean = true;
  showSignUp: boolean = !this.showSignIn;

  signInForm = new FormGroup({
    userPhone: new FormControl(''),
  });

  signUpForm = new FormGroup({
    userName: new FormControl(''),
    userPhone: new FormControl(''),
    userEmail: new FormControl(''), 
  });

  constructor (private authService: UserAuthenticationService) {
    this.authService.showSignInPanel.subscribe(value => {
      this.showPanel = value;
    });
  }

  signUp() {
    const newUser: User = {
      name: this.signUpForm.value.userName as string,
      phone: this.signUpForm.value.userPhone as string,
      email: this.signUpForm.value.userEmail as string
    }
    this.authService.addUser(newUser).subscribe(res => {console.log(res)});
  }

  login() {
    this.authService.login(this.signInForm.value.userPhone as string);
  }

  handleClose() {
    this.authService.setShowSignInPanel(false);
  }

  toggleForms() {
    this.showSignIn = !this.showSignIn;
    this.showSignUp = !this.showSignIn;
  }
}
