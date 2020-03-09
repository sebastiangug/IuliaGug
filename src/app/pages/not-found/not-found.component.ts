import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  constructor(private router: Router) {
    if (window.location.href.slice(window.location.href.length - 3) !== '404') {
      setTimeout(() => {
        this.router.navigate(['404']);
      }, 0);
    }
  }
}
