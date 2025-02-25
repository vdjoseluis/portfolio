import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import {MatDividerModule} from '@angular/material/divider';
import LanguageSelectorComponent from "../language-selector/language-selector.component";
import { CommonModule } from '@angular/common';
import ToggleModeComponent from "../toggle-mode/toggle-mode.component";
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MatDividerModule, RouterLink, RouterLinkActive, TranslateModule, LanguageSelectorComponent, CommonModule, ToggleModeComponent],
  templateUrl: './main-menu.component.html',
  styles: ``
})
export default class MainMenuComponent {
  themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode();
}
