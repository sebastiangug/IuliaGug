import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDesktopComponent {
  show = false;

  toggleMenu() {
    this.show = !this.show;
  }
}
