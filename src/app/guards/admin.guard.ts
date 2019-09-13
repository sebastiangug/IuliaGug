import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { AuthService, IUser } from '../services/auth.service';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.user.pipe(
      switchMap((user: IUser) => {
        console.log(user);
        if (!user) {
          return of(false);
        } else if (user && user.uid === 's4Zlt4EYThej87YpGbM9Cqt8UXc2') {
          console.log('UID MATCH');
          return of(true);
        } else {
          console.log('UID MISMATCH');
          return of(false);
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      switchMap((user: IUser) => {
        return of(true);
      })
    );
  }
}
