import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  IPortfolio,
  FeedbackItem,
} from '../../../../../models/portfolio.model';
import { Observable, Subscription } from 'rxjs';
import { FormErrorStateMatcher } from '../../../../../util/error-matcher';
import { ErrorStateMatcher } from '@angular/material/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPortfolioComponent implements OnInit, OnDestroy {
  addPortfolioForm: FormGroup;
  tags: FormArray;
  sliderImages: FormArray;
  feedback: FormArray;
  subscription: Subscription;
  matcher: ErrorStateMatcher = new FormErrorStateMatcher();
  editorData = '<p> Hello, world!</p>';
  editor = ClassicEditor;

  @Output() submitPortfolio: EventEmitter<IPortfolio> = new EventEmitter();
  @Input() success: Observable<boolean>;
  @Input() portfolio: IPortfolio;
  constructor(
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.subscription = this.success.subscribe((success: boolean) => {
      if (success) {
        this.buildForm();
      }
    });
    this.buildForm();
  }

  buildForm() {
    if (this.portfolio) {
      this.addPortfolioForm = this.formBuilder.group({
        name: new FormControl(this.portfolio.name, Validators.required),
        description: new FormControl(
          this.portfolio.description,
          Validators.required,
        ),
        externalLink: new FormControl(
          this.portfolio.externalLink ? this.portfolio.externalLink : null,
        ),
        link: new FormControl(this.portfolio.link, Validators.required),
        image: new FormControl(this.portfolio.image, Validators.required),
        tags: this.formBuilder.array([]),
        createdAt: this.portfolio.createdAt,
        content: new FormControl(this.portfolio.content ?? ''),
        sliderImages: this.formBuilder.array([]),
        feedback: this.formBuilder.array([]),
      });
      this.portfolio.tags?.forEach((el: string) => {
        this.addTag(el);
      });

      this.portfolio.sliderImages?.forEach((el: string) => {
        this.addSliderImage(el);
      });

      this.portfolio.feedback?.forEach((el: FeedbackItem) => {
        this.addFeedback(el);
      });
    } else {
      this.addPortfolioForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        link: new FormControl('', Validators.required),
        externalLink: new FormControl(null),
        image: new FormControl('', Validators.required),
        tags: this.formBuilder.array([this.createTag()]),
        createdAt: new FormControl(new Date(Date.now())),
        content: new FormControl(''),
        sliderImages: this.formBuilder.array([this.createSliderImage()]),
        feedback: this.formBuilder.array([this.createFeedback()]),
      });
    }

    this.ref.detectChanges();
  }

  addFeedback(feedback?: FeedbackItem) {
    this.feedback = this.addPortfolioForm.get('feedback') as FormArray;
    this.feedback.push(this.createFeedback(feedback));
  }

  createFeedback(feedback?: FeedbackItem) {
    return this.formBuilder.group({
      name: new FormControl(feedback?.name ?? ''),
      image: new FormControl(feedback?.image ?? ''),
      job: new FormControl(feedback?.job ?? ''),
      message: new FormControl(feedback?.message ?? ''),
    });
  }

  deleteFeedback(i: number) {
    this.feedback = this.addPortfolioForm.get('feedback') as FormArray;
    this.feedback.removeAt(i);
  }

  addSliderImage(image?: string) {
    this.sliderImages = this.addPortfolioForm.get('sliderImages') as FormArray;
    this.sliderImages.push(this.createSliderImage(image));
  }

  createSliderImage(image?: string) {
    return this.formBuilder.control(image ?? '');
  }

  deleteSliderImage(i: number) {
    this.sliderImages = this.addPortfolioForm.get('sliderImages') as FormArray;
    this.sliderImages.removeAt(i);
  }

  addTag(tag?: string) {
    this.tags = this.addPortfolioForm.get('tags') as FormArray;
    this.tags.push(this.createTag(tag));
  }

  createTag(tag?: string) {
    return this.formBuilder.control(tag ?? '');
  }

  deleteTag(i: number) {
    this.tags = this.addPortfolioForm.get('tags') as FormArray;
    this.tags.removeAt(i);
  }

  submit() {
    this.submitPortfolio.emit(this.addPortfolioForm.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  textEditorChange({ editor }) {
    this.addPortfolioForm.get('content').setValue(editor.getData());
  }
}
