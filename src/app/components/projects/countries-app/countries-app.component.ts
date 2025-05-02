import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-countries-app',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatIconModule, MatTooltipModule],
  templateUrl: './countries-app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountriesAppComponent { }
