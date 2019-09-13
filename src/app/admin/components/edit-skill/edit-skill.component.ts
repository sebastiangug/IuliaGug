import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { ISkill } from '../../../../models/skill.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSkillComponent implements OnInit {
  editing = false;
  success = of(false);
  @Input() skill: ISkill;
  constructor() {}

  ngOnInit() {}

  updateSkill(skill: ISkill) {
    console.log(skill);
  }

  deleteSkill(id: string) {}

  toggleEdit() {
    this.editing = !this.editing;
  }
}
