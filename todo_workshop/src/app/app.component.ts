import { Component } from '@angular/core';
import {Todo} from "./task/todo";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo_workshop';
  todoList : Todo[] = [];

  updateTaskList (taskList : Todo[]) {
    this.todoList = taskList;
    console.log('logged from parent: ' + taskList)
  }
}
