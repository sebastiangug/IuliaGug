import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService, IUser } from './services/auth.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  admin: Observable<boolean>;

  constructor(public auth: AuthService, public router: Router) {
    this.admin = this.auth.user.pipe(
      switchMap((user: IUser) => {
        if (user && user.uid === 'HRyZ80lsmoaf6GwSPvmUiVR15Wo1') {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }
}
