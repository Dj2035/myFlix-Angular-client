import { Component, OnInit, Input } from '@angular/core';

// To close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// Import API calls created in fetch-api-data.services.ts
import { FetchApiDataService } from '../fetch-api-data.service';

// To display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})

export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  // Function responsible for sending the form inputs to the backend
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      // Here comes logic for a successful user registration

      this.dialogRef.close(); // This will close the modal on success!
      console.log(result);
      this.snackBar.open('user registered successfully!', 'OK', {
        duration: 2000
      });
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }

}
