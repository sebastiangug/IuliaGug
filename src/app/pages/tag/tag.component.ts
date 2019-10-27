import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { ISkill } from '../../../models/skill.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnDestroy {
  tag: string;
  skillsCollection: AngularFirestoreCollection<ISkill>;
  skillDocs: Observable<ISkill[]>;

  filteredDocs: ISkill[] = [];

  subscription: Subscription;
  docSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private ref: ChangeDetectorRef
  ) {
    this.skillsCollection = this.afs.collection('skills');
    this.docSubscription = this.skillsCollection
      .valueChanges()
      .subscribe((docs: ISkill[]) => {
        docs.map((doc: ISkill) => {
          if (doc.tags.some(el => el === this.tag)) {
            this.filteredDocs.push(doc);
          }
        });

        this.ref.detectChanges();
      });
    this.subscription = this.route.paramMap.subscribe((map: ParamMap) => {
      this.filteredDocs = [];
      this.tag = map.get('tag');
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.docSubscription.unsubscribe();
  }
}
