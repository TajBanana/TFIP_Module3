import {Customer} from "./model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) {
  }

  getCustomerAsPromise(): Promise<Customer> {
    return lastValueFrom(this.http.get<Customer>('http://localhost:8080/api/customer'))
  }

  getCustomerAsObservable(): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8080/api/customer');
  }
}
