import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {BreakpointObserver, BreakpointState, Breakpoints, LayoutModule} from '@angular/cdk/layout';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    LayoutModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  navbarCollapsed: boolean = true;

  constructor( 
    private router: Router,
    private breakpointObserver: BreakpointObserver
   ) { };

  // Close the menu when screensize > 
  ngOnInit(): void {
    // check if burger menu is opened
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.navbarCollapsed = true;
      }
    })
  }


  // Toggle navbar
  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed
  }
}
