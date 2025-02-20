import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MatTooltipModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export default class AboutComponent implements AfterViewInit{
  @ViewChild('paragraphsContainer') paragraphsContainer!: ElementRef;
  constructor(private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.paragraphsContainer) {
        this.renderer.removeClass(this.paragraphsContainer.nativeElement, 'opacity-0');
      }
    }, 1000);
  }

}
