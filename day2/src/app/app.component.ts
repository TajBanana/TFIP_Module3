import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to our store';

  inventoryList = ['apple', 'orange', 'banana'];
  cartMap = new Map<string,number>([
    ['apple',0],
    ['orange',0],
    ['banana',0]
  ]);

  onAdd(item:string) {
    console.log(item);
    let currentCount = this.cartMap.get(item);
    if (typeof currentCount === 'number') {
      this.cartMap.set(item, currentCount + 1)
    }
    console.log(this.cartMap)
  }

  onRemove(item: string) {
    let currentCount = this.cartMap.get(item);
    if (typeof currentCount === 'number') {
      this.cartMap.set(item, currentCount + -1)
    }
    console.log(this.cartMap)
  }
}
