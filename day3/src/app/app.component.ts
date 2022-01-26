import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  form: FormGroup;
  tomorrow:string = "";

  taskFormControl = new FormControl('',[Validators.required])
  priorityFormControl = new FormControl('', [Validators.required])
  dueDateFormControl = new FormControl('', [Validators.required])


  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      task: this.taskFormControl,
      priority: this.priorityFormControl,
      dueDate: this.dueDateFormControl
    })
  }

  addTodo() {
    console.log("add to do")
    let singleTodo = new Todo(
      this.form.value.task,
      this.form.value.priorty,
      this
    )
  }

}
