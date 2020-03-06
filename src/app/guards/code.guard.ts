import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EncryptionService } from '../services/encryption.service';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CodeGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private encryptionService: EncryptionService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.encryptionService.codeProvided.pipe(
      take(1),
      tap(code => {
        if (!code) {
          this.router.navigate(['code']);
        }
      }),
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.encryptionService.codeProvided.pipe(
      take(1),
      tap(code => {
        if (!code) {
          this.router.navigate(['code']);
        }
      }),
    );
  }
}
