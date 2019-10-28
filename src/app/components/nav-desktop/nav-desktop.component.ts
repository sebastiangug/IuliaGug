import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDesktopComponent {
  show = true;

  toggleMenu() {
    console.log('toggling menu');
    this.show = !this.show;
  }
}
