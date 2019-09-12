import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { ISkill } from '../../../../models/skill.model';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSkillComponent implements OnInit {
  @Input() skill: ISkill;
  constructor() {}

  ngOnInit() {}
}
