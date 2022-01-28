import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day5-revision';
  parentCount = 100;
  childCount = -1;

  updateChildCount($event: number) {
    this.childCount = $event;
  }
}
