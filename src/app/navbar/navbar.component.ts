import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navbarCollapsed: boolean = true;

  constructor( private router: Router ) { }

  // Toggle navbar
  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed
  }
}
