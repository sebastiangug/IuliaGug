import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from '@angular/forms';
import { IPortfolio } from '../../../../models/portfolio.model';
import { Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSkillComponent implements OnInit {
  addSkillForm: FormGroup;
  tags: FormArray;
  formPortfolioItems: FormArray;

  @Input() portfolioItems: Observable<IPortfolio[]>;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addSkillForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      firstUsed: new FormControl('', Validators.required),
      tags: this.formBuilder.array([this.createTag()]),
      portfolioItems: this.formBuilder.array([this.createPortfolioItem()]),
      createdAt: new Date(Date.now())
    });
  }

  addTag() {
    this.tags = this.addSkillForm.get('tags') as FormArray;
    this.tags.push(this.createTag());
  }

  addPortfolioItem() {
    this.formPortfolioItems = this.addSkillForm.get(
      'portfolioItems'
    ) as FormArray;
    this.formPortfolioItems.push(this.createPortfolioItem());
  }

  createTag() {
    return this.formBuilder.control('');
  }

  createPortfolioItem() {
    return this.formBuilder.group({
      name: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required)
    });
  }

  deleteTag(i: number) {
    this.tags = this.addSkillForm.get('tags') as FormArray;
    this.tags.removeAt(i);
  }

  deletePortfolioItem(i: number) {
    this.formPortfolioItems = this.addSkillForm.get(
      'portfolioItems'
    ) as FormArray;
    this.formPortfolioItems.removeAt(i);
  }

  portfolioItemSelected(i: number, event: MatSelectChange) {
    this.formPortfolioItems = this.addSkillForm.get(
      'portfolioItems'
    ) as FormArray;
    this.formPortfolioItems
      .at(i)
      .setValue({ name: event.value.name, link: event.value.link });
  }

  get activeFormProjects() {
    return this.addSkillForm.get('portfolioItems') as FormArray;
  }

  submit() {
    console.log(this.addSkillForm.value);
  }
}
