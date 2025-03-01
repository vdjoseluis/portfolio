import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild, inject } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatTooltipModule, TranslateModule, CommonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export default class AboutComponent implements AfterViewInit, OnInit{
  private title = inject(Title);
  private meta = inject(Meta);

  @ViewChild('paragraphsContainer') paragraphsContainer!: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.title.setTitle('About me | José Luis Vásquez Drouet');
    this.meta.updateTag({ name: 'description', content: 'About me | José Luis' });
    this.meta.updateTag({ name: 'og:title', content: 'About me | José Luis' });
    this.meta.updateTag({ name: 'og:description', content: 'About me | José Luis' });
    this.meta.updateTag({ name: 'og:image', content: 'https://joseluis-portfolio.vercel.app/foto.png' });
    this.meta.updateTag({ name: 'keywords', content: 'José Luis Vásquez Drouet, Frontend, vdjoseluis, Angular, Portfolio' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.paragraphsContainer) {
        this.renderer.removeClass(this.paragraphsContainer.nativeElement, 'opacity-0');
      }
    }, 1000);
  }
}
