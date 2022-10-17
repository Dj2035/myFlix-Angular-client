import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  //navigates to movies (main) page
  goToMovies(): void {
    this.router.navigate(['movies']);
  }

  //navigates to user profile
  goToProfile(): void {
    this.router.navigate(['profile']);
  }

  //logs out users and clears local storage
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
  }

}
