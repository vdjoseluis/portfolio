import { Component, inject, OnInit } from '@angular/core';
import SkillsCardComponent from '../../components/skills-card/skills-card.component';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsCardComponent, CommonModule],
  templateUrl: './skills.component.html',
})
export default class SkillsComponent implements OnInit {
  private seo = inject(SeoService);
  private schema = inject(SchemaService);

  ngOnInit(): void {
    this.seo.updateMetaData({
      title: 'Skills | José Luis Vásquez Drouet',
      description: 'Habilidades técnicas de José Luis Vásquez Drouet en Angular, TypeScript, diseño responsive, y desarrollo multiplataforma.',
      url: 'https://vdjoseluis-portfolio.vercel.app/skills',
      image: 'https://vdjoseluis-portfolio.vercel.app/foto.png',
      keywords: 'Skills, habilidades, tecnologías, Angular, TypeScript, Java, Kotlin, Bootstrap, Tailwind, responsive design, frontend, desarrollo web, José Luis Vásquez Drouet, Málaga'
    });

    this.schema.setSchema({
      "@context": "https://schema.org",
      "@type": "Skills ItemList",
      "name": "Habilidades técnicas de José Luis Vásquez Drouet",
      "description": "Listado de tecnologías y herramientas dominadas por José Luis Vásquez Drouet, incluyendo Angular, TypeScript, Java, HTML, CSS y más.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Angular"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "TypeScript"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Java"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "HTML5, CSS3, JavaScript"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Bootstrap, Tailwind"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Inkscape, Git, GitHub"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Kotlin"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Firebase, MongoDB, MySQL"
        }
      ],
      "sameAs": [
        "https://github.com/vdjoseluis",
        "https://linkedin.com/in/vdjoseluis"
      ]
    });

  }

  fundamentals = { title: 'fundamentals', skills: ['HTML', 'CSS', 'Javascript', 'Typescript'] };
  frontend = { title: 'frontend', skills: ['Angular', 'React'] };
  backend = { title: 'backend', skills: ['Node', 'Java', 'MongoDB', 'MySQL'] };
  css = { title: 'css', skills: ['Bootstrap', 'Tailwind'] };
  mobile = { title: 'mobile', skills: ['Android', 'Kotlin'] };
  versions = { title: 'versions', skills: ['Git', 'Github'] };
}
