import { Component, inject, Inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import MainMenuComponent from './components/main-menu/main-menu.component';
import { CommonModule } from '@angular/common';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguageService, SERVER_LANG_TOKEN } from './services/language.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';

  themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode();

  cookie = inject(SsrCookieService);
  languageService = inject(LanguageService);

  constructor(
    @Optional()
    @Inject(SERVER_LANG_TOKEN)
    langServer: string
  ) {
    const lang =
      langServer ??
      (this.cookie.check('lang') ? this.cookie.get('lang') : 'es');

    this.languageService.changeLang(lang);
  }
}
