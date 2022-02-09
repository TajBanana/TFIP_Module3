import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  num: number = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.num = parseInt(this.activatedRoute.snapshot.params['num'])
    console.info('>>> number ',this.num)
  }

  back() {
    this.router.navigate(['/']);
  }
}
