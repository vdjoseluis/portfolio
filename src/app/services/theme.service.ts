import { Injectable, Signal, signal, inject } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private cookie = inject(SsrCookieService);

  private _isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    // Sincronizar en navegador si localStorage tiene algo diferente a la cookie
    if (this.isBrowser() && localStorage.getItem('darkMode')) {
      const stored = JSON.parse(localStorage.getItem('darkMode')!);
      if (stored !== this._isDarkMode()) {
        this._isDarkMode.set(stored);
      }
    }
  }

  toggleTheme(): void {
    const newMode = !this._isDarkMode();
    this._isDarkMode.set(newMode);

    // Guardar en cookie (para SSR y persistencia general)
    this.cookie.set('darkMode', JSON.stringify(newMode), { path: '/' });

    // Opcional: Guardar también en localStorage si estamos en el navegador
    if (this.isBrowser()) {
      localStorage.setItem('darkMode', JSON.stringify(newMode));
    }
  }

  isDarkMode(): Signal<boolean> {
    return this._isDarkMode;
  }

  private getInitialTheme(): boolean {
    const cookieMode = this.cookie.get('darkMode');

    if (cookieMode !== undefined && cookieMode !== '') {
      return JSON.parse(cookieMode);
    }

    return false; // Por defecto modo claro
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
