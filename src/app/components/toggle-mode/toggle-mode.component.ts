import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-toggle-mode',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './toggle-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToggleModeComponent  {

  themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode();

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
