import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import SophiesBurgersComponent from "../../components/projects/sophies-burgers/sophies-burgers.component";
import CountriesAppComponent from "../../components/projects/countries-app/countries-app.component";
import VdlogisticsMobileComponent from "../../components/projects/vdlogistics-mobile/vdlogistics-mobile.component";
import VdlogisticsDesktopComponent from "../../components/projects/vdlogistics-desktop/vdlogistics-desktop.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTabsModule, MatIconModule, SophiesBurgersComponent, CountriesAppComponent, VdlogisticsMobileComponent, VdlogisticsDesktopComponent],
  templateUrl: './projects.component.html',
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

  dropdownOpen = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  projects = [
    { name: 'sophies-burgers', component: SophiesBurgersComponent },
    { name: 'countries-app', component: CountriesAppComponent },
    { name: 'vdlogistics-desktop', component: VdlogisticsDesktopComponent },
    { name: 'vdlogistics-mobile', component: VdlogisticsMobileComponent },
  ];

  selectProject(index: number) {
    this.activeTabIndex = index;
    this.dropdownOpen = false;
  }
}
