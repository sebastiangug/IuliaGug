import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { IPortfolio } from '../../../../models/portfolio.model';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPortfolioComponent implements OnInit {
  addPortfolioForm: FormGroup;
  tags: FormArray;

  @Output() submitPortfolio: EventEmitter<IPortfolio> = new EventEmitter();
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
    this.submitPortfolio.emit(this.addPortfolioForm.value);
  }
}
