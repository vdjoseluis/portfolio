import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styles: ``
})
export default class ContactComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact | José Luis Vásquez Drouet');
    this.meta.updateTag({ name: 'description', content: 'Contact | José Luis' });
    this.meta.updateTag({ name: 'og:title', content: 'Contact | José Luis' });
    this.meta.updateTag({ name: 'og:description', content: 'Contact | José Luis' });
    this.meta.updateTag({ name: 'og:image', content: 'https://joseluis-portfolio.vercel.app/foto.png' });
    this.meta.updateTag({ name: 'keywords', content: 'José Luis Vásquez Drouet, Frontend, vdjoseluis, Angular, Portfolio' });
  }
}
