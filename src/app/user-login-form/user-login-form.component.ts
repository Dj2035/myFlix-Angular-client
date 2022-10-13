import { Component, OnInit, Input } from '@angular/core';

// To close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// Import API calls created in fetch-api-data.services.ts
import { FetchApiDataService } from '../fetch-api-data.service';

// To display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})

export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  // Function responsible for sending the form inputs to the backend
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((response) => {
      //Logic for successful login comes here

      this.dialogRef.close(); // This will close the modal on success!
      console.log(response);

      //Adding current user and token to localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', response.user.Username);

      this.snackBar.open('user logged in successfully!', 'OK', {
        duration: 2000
      });
    }, (response) => {
      console.log(response);
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    })
  }

}