import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  updateMetaData({
    title,
    description,
    url,
    image = 'https://vdjoseluis-portfolio.vercel.app/foto.png',
    keywords = ''
  }: {
    title: string;
    description: string;
    url: string;
    image?: string;
    keywords?: string;
  }) {
    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'og:title', content: title });
    this.metaService.updateTag({ name: 'og:description', content: description });
    this.metaService.updateTag({ name: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'og:url', content: url });
    this.metaService.updateTag({ name: 'og:image', content: image });
  }
}
