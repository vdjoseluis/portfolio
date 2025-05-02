import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-vdlogistics-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatIconModule, MatTooltipModule],
  templateUrl: './vdlogistics-mobile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VdlogisticsMobileComponent { }
