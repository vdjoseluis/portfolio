import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, MatIconModule],
  templateUrl: './contact.component.html',
})
export default class ContactComponent implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);

  ngOnInit(): void {
    this.seo.updateMetaData({
      title: 'Contacto | José Luis Vásquez Drouet',
      description: 'Contacta con José Luis Vásquez Drouet, desarrollador web y multiplataforma ubicado en Málaga.',
      url: 'https://vdjoseluis-portfolio.vercel.app/contact',
      image: 'https://vdjoseluis-portfolio.vercel.app/foto.png',
      keywords: 'Contacto, José Luis Vásquez Drouet, desarrollador web, frontend, Angular, Málaga, email, colaboración'
    });

    this.schema.setSchema({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contacto | José Luis Vásquez Drouet",
      "url": "https://vdjoseluis-portfolio.vercel.app/contact",
      "description": "Página de contacto de José Luis Vásquez Drouet. Puedes escribirme para proyectos de desarrollo web y colaboraciones.",
      "image": "https://vdjoseluis-portfolio.vercel.app/foto.png",
      "keywords": "Contacto, José Luis Vásquez Drouet, desarrollador web, frontend, Angular, Málaga, email, colaboración",
      "sameAs": [
        "https://github.com/vdjoseluis",
        "https://linkedin.com/in/vdjoseluis"
      ]});
  }
}
