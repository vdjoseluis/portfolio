import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MatDividerModule, RouterLink, RouterLinkActive],
  templateUrl: './main-menu.component.html',
  styles: ``
})
export default class MainMenuComponent {
  menuItems = [
    { key: 'about', value: 'Acerca de mi' },
    { key: 'skills', value: 'Tecnologías' },
    { key: 'projects', value: 'Proyectos' },
    { key: 'contact', value: 'Contacto' }
  ]
}
