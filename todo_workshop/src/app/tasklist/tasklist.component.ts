import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../task/todo";

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input() todoList: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  logTodoList() {
    console.log(this.todoList)
  }
}
