import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
    showBurgerMenu: boolean = false;
    constructor() {}
    closeMenu() {
      this.showBurgerMenu = false;
  }
}