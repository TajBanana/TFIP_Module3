import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title = 'Todo';
  todoForm: FormGroup;
  tomorrow = new Date();
  todo = [];



  constructor() { }

  ngOnInit(): void {
  }

}
