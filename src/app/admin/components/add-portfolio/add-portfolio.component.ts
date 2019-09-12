import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPortfolioComponent implements OnInit {
  addPortfolioForm: FormGroup;
  tags: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addPortfolioForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      tags: this.formBuilder.array([this.createTag()]),
      createdAt: new FormControl(new Date(Date.now()))
    });
  }

  addTag() {
    this.tags = this.addPortfolioForm.get('tags') as FormArray;
    this.tags.push(this.createTag());
  }

  createTag() {
    return this.formBuilder.control('');
  }

  deleteTag(i: number) {
    this.tags = this.addPortfolioForm.get('tags') as FormArray;
    this.tags.removeAt(i);
  }

  submit() {
    console.log(this.addPortfolioForm.value);
  }
}
