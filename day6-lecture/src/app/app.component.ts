import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, lastValueFrom, Subscription} from "rxjs";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day6-lecture';

  result: any = {};
  origin: any = {};
  userAgent: any = {};
  url: string ='https://httpbin.org/get';
  sub$: Subscription;

  constructor(private http : HttpClient) {
  }

  asObservable(url:string) {
    this.sub$ = this.http.get<any>(url).subscribe(result => {
      this.result = result;
      this.origin = result.origin;
      this.userAgent = result.headers['User-Agent']
    });
  }

  asObservableFromPromise(url:string) {
    const result$ = this.http.get<any>(url)
    const obs = from(lastValueFrom(result$)).subscribe(result => {
      console.info('asObservablesFromPromise')
    })

  }

  asPromise(url:string) {
    //returns observable, convention is to suffix an observable with $
    const result$ = this.http.get<any>(url);
    //  convert observable into a promise
    lastValueFrom(result$)
      .then(result=> {
        this.result = result;
        this.origin = result.origin;
        this.userAgent = result.headers['User-Agent']
      })
      .catch(error => {
        this.result = error
      })
  }

  ngOnInit(): void {
    // this.asPromise(this.url);
    this.asObservable(this.url);
  }

  ngOnDestroy(): void {

  }
}
