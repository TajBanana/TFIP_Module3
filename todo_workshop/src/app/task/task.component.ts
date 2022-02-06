import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Todo} from "./todo";
import * as moment from "moment";
import {Subject} from "rxjs";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title = 'Todo';
  todoForm: FormGroup;
  today = moment(new Date()).format('YYYY-MM-DD')
  todoList: Todo[] =  [];
  priorities = ["low","medium","high","urgent"];

  taskFormControl = new FormControl('',[Validators.required])
  priorityFormControl = new FormControl('',[Validators.required])
  dueDateFormControl = new FormControl('',[Validators.required])

  @Output() onSubmitTask = new Subject<Todo[]>();

  constructor(private fb : FormBuilder) {
    this.todoForm = this.fb.group({
      task: this.taskFormControl,
      priority: this.priorityFormControl,
      dueDate: this.dueDateFormControl
    })
  }

  ngOnInit(): void {
  }

  addTodo() {
    console.log("Add todo")
    console.log(this.today , this.todoForm.value.dueDate)
    let singleTodo = new Todo(
      this.todoForm.value.task,
      this.todoForm.value.priority,
      this.todoForm.value.dueDate,
    )

    console.log(JSON.stringify(singleTodo));
    this.todoList.push(singleTodo);
    this.taskFormControl.reset();
    this.priorityFormControl.reset();
    this.dueDateFormControl.reset();

    let i = this.todoList.length

    localStorage.setItem(String(i), JSON.stringify(singleTodo))

    console.log('passing to parent');
    this.onSubmitTask.next(this.todoList);

  }
}
