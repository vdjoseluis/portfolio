import { Component } from '@angular/core';
import SkillsCardComponent from '../../components/skills-card/skills-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsCardComponent, CommonModule],
  templateUrl: './skills.component.html',
  styles: ``
})
export default class SkillsComponent {
  fundamentals = { title: 'fundamentals', skills: ['HTML', 'CSS', 'Javascript', 'Typescript'] };
  hard = { title: 'hard', skills: ['Angular', 'Node', 'React'] };
  database = { title: 'database', skills: ['MongoDB', 'MySQL'] };
  css = { title: 'css', skills: ['Bootstrap', 'Tailwind'] };
  mobile = { title: 'mobile', skills: ['Android', 'Kotlin'] };
  versions = { title: 'versions', skills: ['Git', 'Github'] };
}
