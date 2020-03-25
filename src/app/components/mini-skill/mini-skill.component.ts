import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface IMiniSkill {
  name: string;
  image: string;
}

@Component({
  selector: 'mini-skill',
  templateUrl: './mini-skill.component.html',
  styleUrls: ['./mini-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniSkillComponent {
  @Input() name: string;
  @Input() image: string;
}
