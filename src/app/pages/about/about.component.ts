import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SchemaService } from '../../services/schema.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatTooltipModule, TranslateModule, CommonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export default class AboutComponent implements AfterViewInit, OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);

  @ViewChild('paragraphsContainer') paragraphsContainer!: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.seo.updateMetaData({
      title: 'Desarrollador Web y Multiplataforma | José Luis Vásquez Drouet',
      description: 'Soy José Luis Vásquez Drouet, desarrollador web y multiplataforma.',
      url: 'https://vdjoseluis-portfolio.vercel.app/',
      image: 'https://vdjoseluis-portfolio.vercel.app/foto.png',
      keywords: 'José Luis Vásquez Drouet, Frontend, vdjoseluis, Angular, Portfolio, Desarrollador web, Desarrollador multiplataforma, Málaga'
    });

    this.schema.setSchema({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "José Luis Vásquez Drouet",
      "jobTitle": "Desarrollador web y multiplataforma",
      "url": "https://vdjoseluis-portfolio.vercel.app/about",
      "image": "https://vdjoseluis-portfolio.vercel.app/foto.png",
      "sameAs": [
        "https://github.com/vdjoseluis",
        "https://linkedin.com/in/vdjoseluis"
      ],
      "description": "Desarrollador frontend con experiencia en Angular, TypeScript y aplicaciones multiplataforma.",
      "keywords": "José Luis Vásquez Drouet, Frontend, vdjoseluis, Angular, Portfolio, Desarrollador web, Desarrollador multiplataforma, Málaga"
    });

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.paragraphsContainer) {
        this.renderer.removeClass(this.paragraphsContainer.nativeElement, 'opacity-0');
      }
    }, 1000);
  }
}
