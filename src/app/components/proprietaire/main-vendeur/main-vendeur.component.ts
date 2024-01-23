import { Component } from '@angular/core';

@Component({
  selector: 'app-main-vendeur',
  templateUrl: './main-vendeur.component.html',
  styleUrls: ['./main-vendeur.component.css']
})
export class MainVendeurComponent {
  isSidebarVisible: boolean = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
