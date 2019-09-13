import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService, IUser } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showOverlay: Observable<boolean>;

  constructor(public auth: AuthService, public router: Router) {
    this.showOverlay = this.auth.user.pipe(
      switchMap((user: IUser) => {
        if (user.uid === 's4Zlt4EYThej87YpGbM9Cqt8UXc2') {
          return of(false);
        } else {
          return this.router.events.pipe(
            switchMap(event => {
              if (event instanceof NavigationEnd) {
                if (event.urlAfterRedirects === '/login') {
                  return of(false);
                } else {
                  return of(true);
                }
              }
            })
          );
        }
      })
    );
  }
}
