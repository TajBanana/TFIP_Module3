import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regHeader: string = 'Registration';
  registrationForm!: FormGroup;
  userDetails: Array<object> = [];

  @Output() sendForm = new Subject<Array<string>>()

  constructor(private fb : FormBuilder) { }

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

  submitDetails() {
    console.log(this.registrationForm);
    console.log(typeof(this.registrationForm.get('name')))
    console.log(this.registrationForm.get('name'))

    this.userDetails.push(this.registrationForm.get('name')!);
    this.userDetails.push(this.registrationForm.get('email')!);
    this.userDetails.push(this.registrationForm.get('phone')!);
    console.log(this.userDetails)
    this.registrationForm.reset();
  }
}
