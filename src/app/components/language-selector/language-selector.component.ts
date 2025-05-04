import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LanguageSelectorComponent {
  languageService = inject(LanguageService);

  currentLang = this.languageService.currentLang;

  dropdownOpen = false;

  languages = signal ([
    { key: 'es', value: 'ES' },
    { key: 'en', value: 'EN' },
    { key: 'it', value: 'IT' }
  ]);

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLang(lang: string) {
    this.dropdownOpen = false;

    this.languageService.changeLang(lang);
  }


 }
