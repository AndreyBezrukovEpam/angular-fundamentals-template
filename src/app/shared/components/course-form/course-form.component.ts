import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder, FormGroup, FormControl, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})

export class CourseFormComponent implements OnInit 
{
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
  courseForm!: FormGroup;
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.

  courseData = {'title': '', 'description':'', 'author':'', 'authors':[], 'duration':''};

  ngOnInit()
  {
    this.courseForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, [Validators.required]),
      'author': new FormControl(null, Validators.required),
      'authors': new FormControl([]),
      'duration': new FormControl(null, Validators.required),
    });
  }

  get() {
    return this.courseForm;
  }

  onClick(){
    console.log(this.courseForm.get('duration'));
  }

  onAddAuthor():void {
    this.courseForm.controls['authors'].value.push(this.courseForm.controls['author'].value);
  }

  getAuthors(): string {
    return this.courseForm.controls['authors'].value.join(', ');
  }

  getDuration(): string {
    const v: string = this.courseForm.controls['duration'].value;
    return v ? v : "";
  }
}
