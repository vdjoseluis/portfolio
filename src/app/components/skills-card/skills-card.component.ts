import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills-card.component.html',
  styles: ``
})
export default class SkillsCardComponent {
  skills = input<{title: string, skills: string[]}>();
}
