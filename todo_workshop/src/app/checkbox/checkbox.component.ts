import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  //Testing check box inputs
  hobbiesForm: FormGroup;
  hobbiesList = ['eat', 'sleep', 'shit', 'code']
  hobbiesArray : FormArray;
  hobbiesStatus = [];

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.hobbiesForm = this.createCheckboxForm()
  }

  createCheckboxForm() : FormGroup {
    this.hobbiesArray = this.fb.array([])
    for (let i = 0; i < this.hobbiesList.length; i++) {
      this.hobbiesArray.push(this.fb.control(''))
    }

    return this.fb.group({
      hobbies: this.hobbiesArray
    })
  }

  processHobbies() {
    this.hobbiesStatus = [];
    console.info('>>> form: ', this.hobbiesForm.value);

    const checkboxData = { ...this.hobbiesForm.value };

    checkboxData.hobbies = checkboxData.hobbies.map(v => !!v);
    console.info('>>> data map: ', checkboxData)

    for (let i in checkboxData.hobbies) {
        this.hobbiesStatus.push(checkboxData.hobbies[i]);
    }

    console.info(this.hobbiesStatus)
  }
}
