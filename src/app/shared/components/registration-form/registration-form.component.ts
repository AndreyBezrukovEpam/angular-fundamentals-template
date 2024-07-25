import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorDirective } from '@app/shared/directives/email.directive';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit 
{
  registrationForm: FormGroup = new FormGroup([]);
  // Use the names `name`, `email`, `password` for the form controls.

  ngOnInit()
  {
    this.registrationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, Validators.required),
    });
  }
}
