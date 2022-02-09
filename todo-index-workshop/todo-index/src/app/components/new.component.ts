import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TodoService} from "../todo.service";
import {Todo} from "../model";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private todoService: TodoService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control(''),
      description: this.fb.control('')
    })
    console.info('>>> created form')
  }

  home() {
    this.router.navigate(['/'])
  }

  save() {
    // console.warn('>>> you have not coded save() yet!!!')
    const todo: Todo =  this.form.value as Todo;
    console.info('>>> task input: ', todo);
    this.todoService.add(todo);
  }

}
