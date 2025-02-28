import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTooltipModule, MatTabsModule, MatIconModule],
  templateUrl: './projects.component.html',
  styles: ``
})
export default class ProjectsComponent {
  activeTabIndex = 0;

  onTabChange(index: number) {
    this.activeTabIndex = index;
  }
}
