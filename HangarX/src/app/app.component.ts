import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  closeMenu() {
    this.menu.close('mainMenu');
  }

  cerrarSesion() {
    console.log('Sesión cerrada');
    this.closeMenu();
    this.router.navigate(['/login']);
  }
}
