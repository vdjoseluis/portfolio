import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTooltipModule, MatTabsModule, MatIconModule],
  templateUrl: './projects.component.html',
  styles: ``
})
export default class ProjectsComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Projects | José Luis Vásquez Drouet');
    this.meta.updateTag({ name: 'description', content: 'Projects | José Luis' });
    this.meta.updateTag({ name: 'og:title', content: 'Projects | José Luis' });
    this.meta.updateTag({ name: 'og:description', content: 'Projects | José Luis' });
    this.meta.updateTag({ name: 'og:image', content: 'https://joseluis-portfolio.vercel.app/foto.png' });
    this.meta.updateTag({ name: 'keywords', content: 'José Luis Vásquez Drouet, Frontend, vdjoseluis, Angular, Portfolio' });
  }
  
  activeTabIndex = 0;

  onTabChange(index: number) {
    this.activeTabIndex = index;
  }
}
