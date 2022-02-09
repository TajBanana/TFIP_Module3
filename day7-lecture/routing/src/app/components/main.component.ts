import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RandomInject} from "../randomInject";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  form!: FormGroup;
  numArray = [];
  //TODO IMPORT LIST
  // importArray: RandomInject;

  constructor(private fb:FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      num: this.fb.control('1')
    })

    for (let i = 0; i < 30; i++) {
      this.numArray.push(i+1)
    }

    //TODO injecting another variable into main
    // console.log('>>> random inject value: ',this.importArray.randomArray)

    console.info('>>> numArray:', this.numArray)
  }

  goToNumber() {
    let num = this.form.value.num;
    console.log('>>> form num: ', this.form.value.num);
    this.router.navigate(['/number',num])
  }
}
