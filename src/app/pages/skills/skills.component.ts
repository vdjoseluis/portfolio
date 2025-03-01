import { Component, inject, OnInit } from '@angular/core';
import SkillsCardComponent from '../../components/skills-card/skills-card.component';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsCardComponent, CommonModule],
  templateUrl: './skills.component.html',
  styles: ``
})
export default class SkillsComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Skills | José Luis Vásquez Drouet');
    this.meta.updateTag({ name: 'description', content: 'Skills | José Luis' });
    this.meta.updateTag({ name: 'og:title', content: 'Skills | José Luis' });
    this.meta.updateTag({ name: 'og:description', content: 'Skills | José Luis' });
    this.meta.updateTag({ name: 'og:image', content: 'https://joseluis-portfolio.vercel.app/foto.png' });
    this.meta.updateTag({ name: 'keywords', content: 'José Luis Vásquez Drouet, Frontend, vdjoseluis, Angular, Portfolio' });
  }

  fundamentals = { title: 'fundamentals', skills: ['HTML', 'CSS', 'Javascript', 'Typescript'] };
  hard = { title: 'hard', skills: ['Angular', 'Node', 'React'] };
  database = { title: 'database', skills: ['MongoDB', 'MySQL'] };
  css = { title: 'css', skills: ['Bootstrap', 'Tailwind'] };
  mobile = { title: 'mobile', skills: ['Android', 'Kotlin'] };
  versions = { title: 'versions', skills: ['Git', 'Github'] };
}
