import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
  fontSize : string = '1em';

  @Input() message:string = "";
  @Output() onFontSize = new EventEmitter<number> ();

  fontSizeChanged($event:any) {
    let fontSize = parseInt($event.target.value);
    this.fontSize=`${fontSize}em`;
    this.onFontSize.next(fontSize);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
