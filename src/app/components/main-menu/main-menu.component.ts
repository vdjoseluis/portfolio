import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MatDividerModule, RouterLink],
  templateUrl: './main-menu.component.html',
  styles: ``
})
export default class MainMenuComponent {

}
