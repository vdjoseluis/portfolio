import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import SophiesBurgersComponent from "../../components/projects/sophies-burgers/sophies-burgers.component";
import CountriesAppComponent from "../../components/projects/countries-app/countries-app.component";
import VdlogisticsMobileComponent from "../../components/projects/vdlogistics-mobile/vdlogistics-mobile.component";
import VdlogisticsDesktopComponent from "../../components/projects/vdlogistics-desktop/vdlogistics-desktop.component";
import { MatIconModule } from '@angular/material/icon';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import VdlogisticsWebComponent from '../../components/projects/vdlogistics-web/vdlogistics-web.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTabsModule, MatIconModule, SophiesBurgersComponent, CountriesAppComponent, VdlogisticsMobileComponent, VdlogisticsDesktopComponent, VdlogisticsWebComponent],
  templateUrl: './projects.component.html',
})
export default class ProjectsComponent implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);

  ngOnInit(): void {
    this.seo.updateMetaData({
      title: 'Proyectos | José Luis Vásquez Drouet',
      description: 'Explora proyectos realizados por José Luis Vásquez Drouet en Angular, TypeScript y plataformas móviles.',
      url: 'https://vdjoseluis-portfolio.vercel.app/projects',
      image: 'https://vdjoseluis-portfolio.vercel.app/foto.png',
      keywords: 'Proyectos Angular, José Luis Vásquez Drouet, frontend, desarrollo web, multiplataforma, aplicaciones, portfolio, Málaga'
    });

    this.schema.setSchema({
      '@context': 'https://schema.org',
      '@type': 'ProjectPage',
      "name": 'Proyectos | José Luis Vásquez Drouet',
      "description": 'Explora proyectos realizados por José Luis Vásquez Drouet en Angular, TypeScript y plataformas móviles.',
      "url": 'https://vdjoseluis-portfolio.vercel.app/projects',
      "image": 'https://vdjoseluis-portfolio.vercel.app/foto.png',
      "keywords": 'Proyectos Angular, José Luis Vásquez Drouet, frontend, desarrollo web, multiplataforma, aplicaciones, portfolio, Málaga',
      "sameAs": [
        "https://github.com/vdjoseluis",
        "https://linkedin.com/in/vdjoseluis"
      ]
    });
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
    { name: 'vdlogistics-web', component: VdlogisticsWebComponent }
  ];

  selectProject(index: number) {
    this.activeTabIndex = index;
    this.dropdownOpen = false;
  }
}
