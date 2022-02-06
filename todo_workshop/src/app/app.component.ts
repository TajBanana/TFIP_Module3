import {Component} from '@angular/core';
import {Todo} from "./task/todo";
import {FormArray, FormGroup} from "@angular/forms";

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

  deleteTask(i : number) {
    console.log('parent deleting task ' + i.toString())
    this.todoList.splice(i,1);
    console.log(this.todoList);
  }

}
