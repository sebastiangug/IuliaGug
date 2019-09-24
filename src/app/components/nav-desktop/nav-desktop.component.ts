import { Component, ChangeDetectionStrategy } from '@angular/core';
import { slideInOutAnimation } from '../../animations/slide.animation';
import { fadeInOut } from '../../animations/fade.animation';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
  animations: [fadeInOut, slideInOutAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDesktopComponent {
  show = false;

  toggleMenu() {
    this.show = !this.show;
  }
}
