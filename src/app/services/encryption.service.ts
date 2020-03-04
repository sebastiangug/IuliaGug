import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private _key: string;

  private firebaseConfig = {
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

  constructor() {
    console.log('ENCRYPTED CONFIG');

    console.log(
      crypto.AES.encrypt(JSON.stringify(this.firebaseConfig), 'picklerick'),
    );
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

  public getFirebaseConfig() {}
}
