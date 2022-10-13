import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(
    public dialog: MatDialog
  ) { }

  //Function that will open the dialog modal when the sign up button is clicked
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // Assigning style to dialog box
      width: '300px'
    });
  }

  //Function that will open the dialog modal when the Login button is clicked
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      // Assigning style to dialog box
      width: '300px'
    });
  }

}
