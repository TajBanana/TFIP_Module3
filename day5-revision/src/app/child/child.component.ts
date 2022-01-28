import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  parentCount:number = 0;

  @Input() count = 0;
  @Output() updateParentCount = new EventEmitter<number>();

  parentCountChange($event:any) {
    console.log($event.target.value)
    this.parentCount = $event.target.value;
    this.updateParentCount.emit(this.parentCount);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onCount() {

  }


}
