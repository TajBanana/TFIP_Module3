import {Component, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../task/todo";
import {Subject} from "rxjs";
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input() todoList: Todo[] = [];
  @Output() onDeleteIndex = new Subject<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteTask(i:number) {
    console.log('delete index: ' + i.toString())
    this.onDeleteIndex.next(i);
  }

  logTodoList() {
    console.log(this.todoList)
  }
}
