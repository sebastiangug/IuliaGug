import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { EncryptionService } from './encryption.service';

export interface IUser {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  user: Observable<IUser>;

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private encryptionService: EncryptionService,
  ) {
    this.user = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.fireStore.doc<IUser>('users/' + user.uid).valueChanges();
        } else {
          return of(null);
        }
      }),
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.fireAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user).then(() => {
      if (credential.user.uid === 'HRyZ80lsmoaf6GwSPvmUiVR15Wo1') {
        localStorage.setItem('uid', credential.user.uid);
        this.encryptionService.isAdmin.next(true);
      }

      return this.router.navigate(['main/admin']);
    });
  }

  async signOut() {
    return this.fireAuth.auth.signOut().then(() => {
      localStorage.removeItem('code');
      localStorage.removeItem('firebase-config');
      this.router.navigate(['/']);
      return window.location.reload();
    });
  }

  private updateUserData({ uid, email, displayName, photoURL }: IUser) {
    const userRef: AngularFirestoreDocument<IUser> = this.fireStore.doc(
      'users/' + uid,
    );
    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };
    return userRef.set(data, { merge: true });
  }
}
