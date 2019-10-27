import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDesktopComponent {
  @Input() admin = false;

  show = true;

  toggleMenu() {
    this.show = !this.show;
  }
}
