import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {Registration} from "../model";
import {RegistrationService} from "../registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regHeader: string = 'Registration';
  registrationForm!: FormGroup;

  @Output() sendForm = new Subject<Array<string>>()

  constructor(private fb : FormBuilder, private registrationSvc: RegistrationService) { }

  ngOnInit(): void {
    this.registrationForm = this.createRegistrationForm();
  }

  createRegistrationForm() : FormGroup {
    return this.registrationForm = this.fb.group({
      name: this.fb.control('',[Validators.minLength(3),Validators.required]),
      email: this.fb.control('',[Validators.email,Validators.required]),
      phone: this.fb.control('',[Validators.minLength(8),Validators.required])
    })
  }

  submitForm() {
    const registration = this.registrationForm.value as Registration;
    console.info('>>> registration form details: ', registration);
    this.registrationSvc.postForm(registration);
    this.registrationForm.reset()
  }
}
