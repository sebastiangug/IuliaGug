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
import { IProject } from '../../../../models/project.model';
import { Observable } from 'rxjs';
import { MatOptionSelectionChange, MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSkillComponent implements OnInit {
  addSkillForm: FormGroup;
  tags: FormArray;
  formProjects: FormArray;

  @Input() projects: Observable<IProject[]>;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addSkillForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      firstUsed: new FormControl('', Validators.required),
      tags: this.formBuilder.array([this.createTag()]),
      projects: this.formBuilder.array([this.createProject()]),
      createdAt: new Date(Date.now())
    });
  }

  addTag() {
    this.tags = this.addSkillForm.get('tags') as FormArray;
    this.tags.push(this.createTag());
  }

  addProject() {
    this.formProjects = this.addSkillForm.get('projects') as FormArray;
    this.formProjects.push(this.createProject());
  }

  createTag() {
    return this.formBuilder.control('');
  }

  createProject() {
    return this.formBuilder.group({
      name: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required)
    });
  }

  addSkill() {
    console.log(this.addSkillForm.value);
  }

  deleteTag(i: number) {
    this.tags = this.addSkillForm.get('tags') as FormArray;
    this.tags.removeAt(i);
  }

  deleteProject(i: number) {
    this.formProjects = this.addSkillForm.get('projects') as FormArray;
    this.formProjects.removeAt(i);
  }

  projectSelected(i: number, event: MatSelectChange) {
    this.formProjects = this.addSkillForm.get('projects') as FormArray;
    this.formProjects
      .at(i)
      .setValue({ name: event.value.name, link: event.value.link });
  }

  get activeFormProjects() {
    return this.addSkillForm.get('projects') as FormArray;
  }
}
