import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { ISkill } from '../../../../models/skill.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrls: ['./manage-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageSkillsComponent {
  skillsCollection: AngularFirestoreCollection<ISkill>;
  skillDocs: Observable<ISkill[]>;

  success: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.skillsCollection = this.afs.collection('skills');
    this.skillDocs = this.skillsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as ISkill;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  saveSkill(skill: ISkill) {
    this.skillsCollection.add(skill).then(data => {
      console.log(data.id);
      this.success.next(true);
      this.success.next(false);
    });
    console.log(skill);
  }
}
