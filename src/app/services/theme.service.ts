import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkMode = signal<boolean>(false);

  toggleTheme(): void {
    this._isDarkMode.set(!this._isDarkMode());
  }

  isDarkMode(): Signal<boolean> {
    return this._isDarkMode;
  }
}
