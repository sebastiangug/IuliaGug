import { Injectable } from '@angular/core';
import * as cryptojs from 'crypto-js';
import { NotifyService } from '../modules/admin/services/notify.service';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private tempKey = 'picklerick';
  private tempKeyUrf = cryptojs.enc.Utf8.parse(this.tempKey);
  private tempIv = cryptojs.enc.Base64.parse(this.tempKey);

  private _key: string;
  private _testValue =
    'a javascript app is like an onion, the more layers you peel back, the more you want to cry';

  private _encryptedConfig: string;
  private config = {
    apiKey: 'AIzaSyCyLhgPblMdtPD_4Iu7xoCdshvSTEcHYXE',
    authDomain: 'sebastiangug-com.firebaseapp.com',
    databaseURL: 'https://sebastiangug-com.firebaseio.com',
    projectId: 'sebastiangug-com',
    storageBucket: 'sebastiangug-com.appspot.com',
    messagingSenderId: '1037120784741',
    appId: '1:1037120784741:web:fa9a408c65421d34',
    test:
      'a javascript app is like an onion, the more layers you peel back, the more you want to cry',
  };

  constructor(private notify: NotifyService) {
    const encrypted = cryptojs.AES.encrypt(
      JSON.stringify(this.config),
      this.tempKeyUrf,
      { iv: this.tempIv },
    ).toString();
    localStorage.setItem('encrypted-config', encrypted);
    this._encryptedConfig = encrypted;
  }

  public setKey(key: string): void {
    this._key = key;
  }

  public removeKey(): void {
    this._key = undefined;
  }

  public testKey(key: string): boolean {
    return true;
  }

  public attemptAccess(code: string) {
    const decoded = cryptojs.AES.decrypt(
      this._encryptedConfig,
      this.tempKeyUrf,
      { iv: this.tempIv },
    );

    console.log(cryptojs.enc.Utf8.stringify(decoded));
  }

  public getFirebaseConfig() {}
}
