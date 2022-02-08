import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, lastValueFrom, map, Subscription} from "rxjs";

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

  ngOnInit(): void {
    // this.asPromise(this.url);
    this.asObservable(this.url);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  asObservable(url:string) {
    console.info('>>> asObservable')
    this.sub$ = this.http.get<any>(url)
      .pipe(
        map(result => {
        return {origin: result.origin, userAgent: result.headers['User-Agent']}}))
      .subscribe(result => {
        this.result = result;
        this.origin = result.origin;
        this.userAgent = result.userAgent
      });
  }

  asObservableFromPromise(url:string) {
    const result$ = this.http.get<any>(url)
    const obs = from(lastValueFrom(result$))
      .pipe(
        map(result =>{
          return {origin: result.origin, userAgent: result.headers['User-Agent']}
        }))
      .subscribe(result => {
        console.info('asObservablesFromPromise');
        this.result = result;
        this.origin = result.origin;
        this.userAgent = result.userAgent
    })

  }

  asPromise(url:string){
    console.info('>>> asPromise')
    //returns observable, convention is to suffix an observable with $
    const result$ = this.http.get<any>(url);
    //  convert observable into a promise
    lastValueFrom(result$).then(result => {
      return { origin: result.origin, userAgent: result.headers['User-Agent']}
    })
      .then(result=> {
        this.result = result;
        this.origin = result.origin;
        this.userAgent = result.userAgent
      })
      .catch(error => {
        this.result = error
      })
  }
}
