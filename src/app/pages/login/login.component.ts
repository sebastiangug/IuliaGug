import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EncryptionService } from '../../services/encryption.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public encryptionService: EncryptionService,
  ) {}

  ngOnInit() {
    this.auth.signOut();

    this.encryptionService.codeProvided.pipe(take(1)).subscribe(val => {
      if (val) {
        this.encryptionService.isAdmin.pipe(take(1)).subscribe(val => {
          if (val) {
            this.auth.signOut();
          } else {
            this.auth.googleSignin();
          }
        });
      }
    });
  }
}
