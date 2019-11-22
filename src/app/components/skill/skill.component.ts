import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { ISkill } from '../../../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillComponent implements AfterViewInit {
  bgHeight = 0;
  hovering = false;
  open = false;
  @Input() skill: ISkill;
  @ViewChild('container') container: any;

  @HostListener('mouseover')
  mouseOver() {
    this.hovering = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.hovering = false;
  }

  constructor(private ref: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.bgHeight = this.container.nativeElement.clientHeight;
    this.ref.detectChanges();
  }

  toggle() {
    this.open = !this.open;
  }
}
