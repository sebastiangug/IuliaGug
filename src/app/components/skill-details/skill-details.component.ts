import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISkill } from '../../../models/skill.model';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ISkill,
  ) {}
}
