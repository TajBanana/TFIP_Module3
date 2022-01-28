import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2-lecture';

  sizeChanged(size: number) {
    console.log(`font size: ${size})`)
  }
}
