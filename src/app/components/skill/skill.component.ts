import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { ISkill } from '../../../models/skill.model';
import { MatDialog } from '@angular/material/dialog';
import { SkillDetailsComponent } from '../skill-details/skill-details.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent implements AfterViewInit {
  bgHeight = 0;
  @Input() skill: ISkill;
  @ViewChild('container') container: any;

  constructor(private ref: ChangeDetectorRef, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.bgHeight = this.container.nativeElement.clientHeight;
    this.ref.detectChanges();
  }

  toggle() {
    this.dialog.open(SkillDetailsComponent, { data: this.skill });
  }
}
