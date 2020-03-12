import { Injectable, Injector } from '@angular/core';
import * as cryptojs from 'crypto-js';
import { NotifyService } from '../modules/admin/services/notify.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthService, IUser } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  // configuration
  private _keySize = 256;
  private _iterations = 100;
  private _encrypted =
    '55dfa261eb7d2c652311bb2d5064530154a99e14498c1338c9e057391f5095598gOm/IpJzK9u/9OFx1eOGF6DMgM0NvwYOu7WVaJKthokkGbyLM6AsWmh/WInG/Xnr1gmyh6/dJZfGNO/U/479nMp2GW48WTYI/vQOyCyvSLDXUEX0nf6wlLnUkQaRBWwqr9+5VEJmcnUGlLG3wDQM/HDR+XOuAQISUiVlprrOcY6jyMPkn2op/yhrb85Gn9OpXOiGiYoNbfS/STHFf8JEcG9U9dGDOujWbRKpqkarKbk74nOTM8vWbPQY2rQiIbVnBKZ6fDlRc3LlSHSu2GFjnSILqipVCKsq4eV6Twx8WJSRwkKCrtpgOBiNInr9JjbzV3o3NPITs5fppwOQa6JQT49W2ccAM9zz1gmj2brIF7qkqmxivkXL2uQTW8cVi9pHcqhjNNVCRIBXN7kYTAslnyLsmb0rL6RR5WhyxUwzxlPSZ9pCjP1W7/wOaLVokeSnaNZS8ncRdQtWTH45tD0wkA/i4gNvCrqsquQELcjS4iJv4RKbVqQfrUftohtgyHmDV4N3oxIUgpRqZxb+9/5V19cydb1HCu6emJbud7p/e0hAijKS5UPCUtv3HlrRBlw';
  public codeProvided: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _decrypt(transitmessage, pass) {
    const salt = cryptojs.enc.Hex.parse(transitmessage.substr(0, 32));
    const iv = cryptojs.enc.Hex.parse(transitmessage.substr(32, 32));
    const encrypted = transitmessage.substring(64);

    const key = cryptojs.PBKDF2(pass, salt, {
      keySize: this._keySize / 32,
      iterations: this._iterations,
    });

    const decrypted = cryptojs.AES.decrypt(encrypted, key, {
      iv: iv,
      padding: cryptojs.pad.Pkcs7,
      mode: cryptojs.mode.CBC,
    });
    return decrypted;
  }

  constructor(private router: Router, private notify: NotifyService) {
    const codeStatus = JSON.parse(localStorage.getItem('code'));
    if (typeof codeStatus === 'boolean' && codeStatus === true) {
      this.codeProvided.next(true);

      if (localStorage.getItem('uid') === 'HRyZ80lsmoaf6GwSPvmUiVR15Wo1') {
        this.isAdmin.next(true);
      }
    }
  }

  public attemptAccess(code: string) {
    let decrypted: any;

    try {
      decrypted = JSON.parse(
        this._decrypt(this._encrypted, code).toString(cryptojs.enc.Utf8),
      );
    } catch (err) {
      console.log(err);
    }

    if (
      decrypted?.test ===
      'a javascript app is like an onion, the more layers you peel back, the more you want to cry'
    ) {
      localStorage.setItem('firebase-config', JSON.stringify(decrypted));
      this.notify.success('That code is 👍 come on in!');
      this.codeProvided.next(true);
      localStorage.setItem('code', JSON.stringify(true));
      this.router.navigate(['main']).then(() => {});
    } else {
      this.notify.error('That is not my code, are you trying to hack 👩‍💻 me?');
    }
  }
}
