import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { ISkill } from '../../../../models/skill.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrls: ['./manage-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageSkillsComponent implements OnInit {
  skillsCollection: AngularFirestoreCollection<ISkill>;
  skillDocs: Observable<ISkill[]>;

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
  ngOnInit() {}
}
